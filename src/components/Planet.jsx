import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export function Planet(props) {
  const groupRef = useRef();
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((state, delta) => {
    const { x, y } = state.pointer;

    // Pro-level frame-independent pointer tracking
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, x * 0.5, 4, delta);
      groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, -y * 0.5, 4, delta);
    }

    // Complex, layered counter-rotations using delta for flawless syncing
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.15;
      coreRef.current.rotation.x += delta * 0.1;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.3;
      ring1Ref.current.rotation.y += delta * 0.15;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.25;
      ring2Ref.current.rotation.z += delta * 0.1;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z += delta * 0.35;
      ring3Ref.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
        {/* Central Obsidian Core */}
        <mesh ref={coreRef} castShadow receiveShadow>
          <icosahedronGeometry args={[1.35, 0]} />
          <meshStandardMaterial
            color="#080807"
            metalness={0.95}
            roughness={0.1}
          />
        </mesh>

        {/* Kingston Gold Inner Ring */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[2.0, 0.04, 16, 100]} />
          <meshStandardMaterial
            color="#F5B800"
            metalness={1}
            roughness={0.05}
          />
        </mesh>

        {/* Brushed Titanium Mid Ring */}
        <mesh ref={ring2Ref}>
          <torusGeometry args={[2.55, 0.05, 16, 100]} />
          <meshStandardMaterial
            color="#11110F"
            metalness={0.9}
            roughness={0.3}
          />
        </mesh>

        {/* Kingston Gold Outer Orbit Ring */}
        <mesh ref={ring3Ref}>
          <torusGeometry args={[3.1, 0.025, 16, 100]} />
          <meshStandardMaterial
            color="#F5B800"
            metalness={1}
            roughness={0.1}
          />
        </mesh>
      </Float>

      {/* Premium Studio Lighting Setup */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={3} castShadow />
      <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#F5B800" />
    </group>
  );
}

export default Planet;