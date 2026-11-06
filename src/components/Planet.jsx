import React, { useRef, useLayoutEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment, PresentationControls } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ArchitecturalCore() {
  const masterGroup = useRef();

  useLayoutEffect(() => {
    // Architectural Scroll Choreography
    const ctx = gsap.context(() => {
      gsap.to(masterGroup.current.rotation, {
        x: 0.8,
        y: -1.2,
        z: 0.4,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero-container',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      gsap.to(masterGroup.current.position, {
        z: -3,
        y: -1.5,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero-container',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <group ref={masterGroup}>
      {/* The Obsidian Slab: High Refraction, Dark Glass */}
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh rotation={[0.2, 0.5, 0]}>
          <boxGeometry args={[2.5, 3.5, 0.4]} />
          <MeshTransmissionMaterial
            backside
            samples={16}
            thickness={0.4}
            chromaticAberration={0.03}
            anisotropy={0.2}
            distortion={0.15}
            distortionScale={0.2}
            temporalPersistence={0.2}
            color="#080807"
          />
        </mesh>
      </Float>

      {/* The Gold Logic-Lines */}
      <Float speed={3.5} rotationIntensity={1.2} floatIntensity={2}>
        <mesh position={[1.1, 0, -0.4]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.08, 4.5, 0.08]} />
          <meshStandardMaterial
            color="#F5B800"
            emissive="#F5B800"
            emissiveIntensity={2.5}
            toneMapped={false}
          />
        </mesh>
        <mesh position={[-1.1, 0, 0.4]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.08, 4.5, 0.08]} />
          <meshStandardMaterial
            color="#F5B800"
            emissive="#F5B800"
            emissiveIntensity={2.5}
            toneMapped={false}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function Planet() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas shadows camera={{ position: [0, 0, 7.5], fov: 35 }}>
        <Environment preset="city" />
        <spotLight position={[10, 10, 10]} intensity={2} />
        <pointLight position={[-10, -10, -10]} color="#F5B800" intensity={1.5} />

        <PresentationControls
          global
          rotation={[0, 0.3, 0]}
          polar={[-0.2, 0.2]}
          azimuth={[-0.2, 0.2]}
          config={{ mass: 2, tension: 170, friction: 26 }}
        >
          <ArchitecturalCore />
        </PresentationControls>

        <EffectComposer disableNormalPass>
          <Bloom intensity={1.2} luminanceThreshold={0.8} mipmapBlur />
          <Noise opacity={0.035} />
          <Vignette esdp={0.5} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}