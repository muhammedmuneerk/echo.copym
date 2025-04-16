import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const RotatingEarth = () => {
  const { scene } = useGLTF('/models/earth/earth.glb');
  const earthRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (earthRef.current) {
      const box = new THREE.Box3().setFromObject(earthRef.current);
      const center = box.getCenter(new THREE.Vector3());
      earthRef.current.position.sub(center);

      const size = box.getSize(new THREE.Vector3()).length();
      const distance = size * 0.9; // zoom in closer
      camera.position.set(0, 0, distance);
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    }
  }, [scene, camera]);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0015;
    }
  });

  return <primitive ref={earthRef} object={scene} scale={60} />; // Increased scale
};

const EarthGlb = () => {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 25] }} // zoomed-in perspective
    >
      {/* Enhanced Balanced Lighting */}
      <ambientLight intensity={0.7} />
      <hemisphereLight skyColor="#ffffff" groundColor="#222222" intensity={1.4} />
      <directionalLight position={[10, 10, 10]} intensity={1.8} />
      <directionalLight position={[-10, -10, 5]} intensity={1.2} />
      <pointLight position={[0, 15, 20]} intensity={0.6} />
      <pointLight position={[0, -10, -20]} intensity={0.6} />

      <RotatingEarth />
    </Canvas>
  );
};

export default EarthGlb;
