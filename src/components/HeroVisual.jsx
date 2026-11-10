import { useEffect, useRef, useState } from "react";

const VERT = `attribute vec2 a;void main(){gl_Position=vec4(a,0.0,1.0);}`;

const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0; float a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.02; a *= 0.5; }
  return v;
}

void main(){
  vec2 uv = gl_FragCoord.xy / uRes.xy;
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes.xy) / uRes.y;
  p += uMouse * 0.14;

  float t = uTime * 0.055;
  vec2 q = vec2(fbm(p * 1.5 + t), fbm(p * 1.5 - t + 5.0));
  float f = fbm(p * 2.3 + q * 1.9 + t * 0.5);

  vec3 amber = vec3(0.961, 0.722, 0.0);
  vec3 ember = vec3(0.86, 0.34, 0.05);
  vec3 col = mix(vec3(0.031, 0.031, 0.027), amber, smoothstep(0.34, 0.96, f));
  col = mix(col, ember, smoothstep(0.58, 1.0, q.x) * 0.38);

  float bands = smoothstep(0.03, 0.0, abs(fract(f * 7.0) - 0.5) - 0.455);
  col += amber * bands * 0.30;

  vec2 g = abs(fract(uv * vec2(26.0, 15.0)) - 0.5);
  col += vec3(1.0) * smoothstep(0.492, 0.5, max(g.x, g.y)) * 0.04;

  float vig = smoothstep(1.35, 0.2, length(p * vec2(0.85, 1.15)));
  col *= vig;
  col += (hash(gl_FragCoord.xy + uTime) - 0.5) * 0.028;

  gl_FragColor = vec4(col, 1.0);
}
`;

export default function HeroVisual() {
  const ref = useRef(null);
  const [useGL, setUseGL] = useState(false);

  useEffect(() => {
    const desktop = window.innerWidth >= 768;
    const motion = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setUseGL(desktop && motion);
  }, []);

  useEffect(() => {
    if (!useGL) return;
    const canvas = ref.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "high-performance" });
    if (!gl) { setUseGL(false); return; }

    const compile = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { setUseGL(false); return; }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "uRes");
    const uTime = gl.getUniformLocation(prog, "uTime");
    const uMouse = gl.getUniformLocation(prog, "uMouse");

    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    const resize = () => {
      const w = Math.floor(canvas.clientWidth * dpr);
      const h = Math.floor(canvas.clientHeight * dpr);
      if (w === 0 || h === 0) return false;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      gl.uniform2f(uRes, canvas.width, canvas.height);
      return true;
    };

    let mx = 0, my = 0, tx = 0, ty = 0;
    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth) * 2 - 1;
      ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let raf = 0;
    let visible = true;
    const start = performance.now();

    const frame = (now) => {
      if (!visible) return;
      mx += (tx - mx) * 0.045;
      my += (ty - my) * 0.045;
      if (resize()) {
        gl.uniform1f(uTime, (now - start) / 1000);
        gl.uniform2f(uMouse, mx, my);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) { cancelAnimationFrame(raf); raf = requestAnimationFrame(frame); }
    });
    io.observe(canvas);

    const onVis = () => {
      if (document.hidden) { visible = false; cancelAnimationFrame(raf); }
      else { visible = true; raf = requestAnimationFrame(frame); }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      visible = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
      const ext = gl.getExtension("WEBGL_lose_context");
      if (ext) ext.loseContext();
    };
  }, [useGL]);

  return (
    <>
      <div className="aurora" aria-hidden="true" />
      <div className="aurora-grid" aria-hidden="true" />
      {useGL && (
        <canvas
          ref={ref}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
        />
      )}
    </>
  );
}
