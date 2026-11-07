import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment, PresentationControls } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, Noise } from '@react-three/postprocessing';

function CrystalCore() {
  const outerCrystal = useRef();
  const innerCore = useRef();

  useFrame((_, delta) => {
    // Smooth, continuous cinematic rotation
    if (outerCrystal.current) {
      outerCrystal.current.rotation.y += delta * 0.15;
      outerCrystal.current.rotation.x += delta * 0.1;
    }
    if (innerCore.current) {
      innerCore.current.rotation.y -= delta * 0.2;
    }
  });

  return (
    <group>
      {/* The Molten Gold Inner Core */}
      <mesh ref={innerCore}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color="#F5B800"
          emissive="#F5B800"
          emissiveIntensity={4}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>

      <mesh ref={innerCore} scale={0.8}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#F5B800"
          emissive="#F5B800"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>

      {/* The Refractive Obsidian Outer Shell */}
      <mesh ref={outerCrystal}>
        <icosahedronGeometry args={[2.8, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          thickness={1.5}
          roughness={0.1}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.04}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.3}
          temporalPersistence={0.1}
          color="#080807"
        />
      </mesh>
    </group>
  );
}

export default function Planet() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} gl={{ antialias: true }}>
        <ambientLight intensity={0.1} />
        
        {/* Dynamic Studio Lighting */}
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <pointLight position={[-5, -5, -5]} color="#F5B800" intensity={5} distance={15} />

        <Environment preset="city" />

        <PresentationControls
          global
          snap={{ mass: 1, tension: 150 }}
          rotation={[0, 0, 0]}
          polar={[-0.2, 0.2]}
          azimuth={[-0.2, 0.2]}
        >
          <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1}>
            <CrystalCore />
          </Float>
        </PresentationControls>

        {/* High-End Post-Processing */}
        <EffectComposer disableNormalPass>
          <Bloom
            intensity={1.5}
            luminanceThreshold={0.5}
            luminanceOffset={0.1}
            mipmapBlur
          />
          <Noise opacity={0.04} />
          <Vignette offset={0.3} darkness={0.9} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}