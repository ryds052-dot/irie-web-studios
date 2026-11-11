import { useEffect, useRef, useState } from "react";

const VERT = `attribute vec2 a;void main(){gl_Position=vec4(a,0.0,1.0);}`;

const FRAG = `
precision mediump float;
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
  for (int i = 0; i < 3; i++) { v += a * noise(p); p *= 2.02; a *= 0.5; }
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
  vec3 deep  = vec3(0.010, 0.048, 0.052);
  vec3 ember = vec3(0.92, 0.36, 0.10);

  float slope = (f - q.y) * 1.6 + (q.x - q.y) * 0.9;
  float lit = clamp(0.5 + slope * 2.2, 0.0, 1.0);

  vec3 col = mix(deep, amber, smoothstep(0.26, 0.92, f));
  col = mix(col, ember, smoothstep(0.62, 1.0, q.x) * 0.34);
  col *= 0.55 + lit * 0.85;

  float b1 = smoothstep(0.030, 0.0, abs(fract(f * 7.0) - 0.5) - 0.455);
  float b2 = smoothstep(0.012, 0.0, abs(fract(f * 19.0) - 0.5) - 0.470);
  col += amber * (b1 * 0.34 + b2 * 0.16) * lit;

  col += ember * pow(max(f - 0.72, 0.0), 1.6) * 0.9;

  vec2 g = abs(fract(uv * vec2(26.0, 15.0)) - 0.5);
  col += vec3(1.0) * smoothstep(0.494, 0.5, max(g.x, g.y)) * 0.035;

  float vig = smoothstep(1.45, 0.15, length(p * vec2(0.82, 1.12)));
  col *= vig;
  col = pow(col, vec3(0.94));
  col += (hash(gl_FragCoord.xy + uTime) - 0.5) * 0.030;

  gl_FragColor = vec4(col, 1.0);
}
`;

const IS_SMALL = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
const DPR_CAP = IS_SMALL ? 1.5 : 1.25;
const SCALE = IS_SMALL ? 0.6 : 0.7;
const FPS = IS_SMALL ? 20 : 30;

export default function HeroVisual() {
  const ref = useRef(null);
  const [useGL, setUseGL] = useState(false);

  useEffect(() => {
    const motion = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setUseGL(motion);
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

    const dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP) * SCALE;
    const resize = () => {
      const w = Math.max(1, Math.floor(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.floor(canvas.clientHeight * dpr));
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
    let running = false;
    let last = 0;
    const interval = 1000 / FPS;
    const start = performance.now();

    const frame = (now) => {
      if (!running) return;
      raf = requestAnimationFrame(frame);
      if (now - last < interval) return;
      last = now;
      mx += (tx - mx) * 0.06;
      my += (ty - my) * 0.06;
      resize();
      gl.uniform1f(uTime, (now - start) / 1000);
      gl.uniform2f(uMouse, mx, my);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const play = () => {
      if (running) return;
      running = true;
      last = 0;
      raf = requestAnimationFrame(frame);
    };
    const pause = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    play();

    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) play(); else pause();
    }, { threshold: 0 });
    io.observe(canvas);

    const onVis = () => { if (document.hidden) pause(); else play(); };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      pause();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
      const ext = gl.getExtension("WEBGL_lose_context");
      if (ext) ext.loseContext();
    };
  }, [useGL]);

  return (
    <>
      {!useGL && <div className="aurora" aria-hidden="true" />}
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







