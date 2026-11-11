import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useMemo } from "react";

function Aura() {
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
  }), []);
  useFrame((state, delta) => {
    uniforms.uTime.value += delta;
    uniforms.uMouse.value.set(state.pointer.x * 0.5 + 0.5, state.pointer.y * 0.5 + 0.5);
  });
  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={`void main(){ gl_Position = vec4(position, 1.0); }`}
        fragmentShader={`
          precision highp float;
          uniform float uTime;
          uniform vec2 uMouse;
          void main(){
            vec2 uv = gl_FragCoord.xy / vec2(1600.0, 900.0);
            vec2 m = uMouse;
            m.x += sin(uTime * 0.15) * 0.12;
            m.y += cos(uTime * 0.11) * 0.08;
            float d = distance(uv * vec2(1.78, 1.0), m * vec2(1.78, 1.0));
            float glow = 0.14 / (d * 2.6 + 0.45);
            vec3 ink = vec3(0.031, 0.031, 0.027);
            vec3 gold = vec3(0.784, 0.663, 0.416);
            float n = fract(sin(dot(uv * 640.0, vec2(12.9898, 78.233))) * 43758.5453) * 0.025;
            vec3 col = ink + gold * glow * 0.4 + n;
            gl_FragColor = vec4(col, 1.0);
          }
        `}
      />
    </mesh>
  );
}

export default function Backdrop() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas dpr={[1, 1.5]} gl={{ antialias: false, powerPreference: "low-power" }}>
        <Aura />
      </Canvas>
    </div>
  );
}
