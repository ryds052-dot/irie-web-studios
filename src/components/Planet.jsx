import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function DiagnosticCore() {
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group>
      {/* Solid Dark Base */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial color="#080807" />
      </mesh>
      
      {/* Gold Blueprint Wireframe overlay */}
      <mesh scale={1.05}>
        <icosahedronGeometry args={[2, 1]} />
        <meshBasicMaterial color="#F5B800" wireframe />
      </mesh>
    </group>
  );
}

export default function Planet() {
  return (
    {/* If you do not see a massive red box with a yellow border, your layout is broken. */}
    <div className="w-full h-[500px] bg-red-600 border-4 border-yellow-400 relative z-50">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <DiagnosticCore />
      </Canvas>
    </div>
  );
}