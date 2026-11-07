import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment, PresentationControls } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';

function CrystalCore() {
  const outerCrystal = useRef();
  const innerCore = useRef();

  useFrame((_, delta) => {
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
        <icosahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color="#F5B800"
          emissive="#F5B800"
          emissiveIntensity={4}
          wireframe
        />
      </mesh>

      {/* The Refractive Obsidian Outer Shell */}
      <mesh ref={outerCrystal}>
        <octahedronGeometry args={[2.5, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={8}
          thickness={1.2}
          roughness={0.15}
          transmission={1}
          ior={1.4}
          chromaticAberration={0.06}
          color="#080807"
        />
      </mesh>
    </group>
  );
}

export default function Planet() {
  return (
    <div className="w-full h-full min-h-[500px] relative cursor-grab active:cursor-grabbing">
      <Canvas 
        camera={{ position: [0, 0, 7], fov: 45 }} 
        dpr={[1, 1.5]} 
        gl={{ powerPreference: 'high-performance', antialias: false }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        
        <Suspense fallback={null}>
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

          <EffectComposer disableNormalPass multisampling={0}>
            <Bloom
              luminanceThreshold={0.5}
              luminanceOffset={0.1}
              intensity={1.5}
            />
            <Vignette offset={0.3} darkness={0.9} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}