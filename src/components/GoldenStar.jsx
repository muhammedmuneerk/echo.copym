// GoldenStarScene.jsx
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useRef, useEffect } from 'react';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function GoldenStarScene() {
  const Star = () => {
    const starRef = useRef();
    const { scene } = useGLTF('/models/GoldenStar/gold_star.glb');

    useEffect(() => {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color('#ffd700'),
            metalness: 0.9,
            roughness: 0.1,
            clearcoat: 0.5,
            clearcoatRoughness: 0.1,
            reflectivity: 1,
          });
        }
      });
    }, [scene]);

    useFrame((state, delta) => {
      if (starRef.current) {
        starRef.current.rotation.y += delta * 0.5;
      }
    });

    return (
      <group ref={starRef} scale={[20, 20, 20]} position={[0, 0, 0]}>
        <primitive object={scene} />
      </group>
    );
  };

  return (
    <div style={{ width: '100%', height: '400px', background: 'transparent' }}>
      <Canvas shadows camera={{ position: [0, 0, 2.5], fov: 45 }}>
        <color attach="background" args={['transparent']} />
        <fog attach="fog" args={['#000000', 5, 15]} />
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow
        />
        <pointLight 
          position={[-5, 5, -5]} 
          intensity={0.5} 
          color="#ffd700"
        />
        <spotLight 
          position={[0, 5, 0]} 
          intensity={1} 
          angle={0.6} 
          penumbra={0.5}
          castShadow
          color="#ffffff"
        />
        <Suspense fallback={null}>
          <Star />
          <Environment preset="warehouse" />
        </Suspense>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          rotateSpeed={0.3}
          autoRotate={true}
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}
