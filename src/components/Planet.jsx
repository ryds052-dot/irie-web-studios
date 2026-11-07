import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PresentationControls, Environment } from '@react-three/drei';
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing';
import * as THREE from 'three';

function EngineWireframe() {
  const knotRef = useRef();

  useFrame((_, delta) => {
    if (knotRef.current) {
      knotRef.current.rotation.x -= delta * 0.15;
      knotRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={knotRef}>
      {/* Solid Obsidian Base */}
      <mesh>
        <torusKnotGeometry args={[1.4, 0.4, 128, 32]} />
        <meshStandardMaterial 
          color="#080807" 
          metalness={0.9} 
          roughness={0.1} 
        />
      </mesh>
      
      {/* Outer Kingston Gold Blueprint Wireframe */}
      <mesh scale={1.01}>
        <torusKnotGeometry args={[1.4, 0.4, 128, 32]} />
        <meshBasicMaterial 
          color="#F5B800" 
          wireframe 
          transparent 
          opacity={0.6} 
        />
      </mesh>
    </group>
  );
}

export default function Planet() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        
        <Environment preset="city" />

        <PresentationControls
          global
          snap={{ mass: 1, tension: 150 }}
          rotation={[0.2, 0.2, 0]}
          polar={[-0.3, 0.3]}
          azimuth={[-0.3, 0.3]}
        >
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <EngineWireframe />
          </Float>
        </PresentationControls>

        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} />
          <Noise opacity={0.05} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}