import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

const CustomMesh = ({ geometry, material, position, rotation, scale }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.02;
      meshRef.current.rotation.z += 0.02;
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={material}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
};

const Scene = () => {
  const generateRandom = (k = 10) => -Math.random() * k + Math.random() * k;

  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      // groupRef.current.rotation.x += 0.001;
      // groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.z += 0.001;
    }
  });

  const meshes = [];
  for (let i = 0; i < 300; i++) {
    const scale = 0.05 + Math.abs(generateRandom(0.03));
    meshes.push(
      <CustomMesh
        key={i}
        geometry={new THREE.CircleGeometry(1, 3)}
        material={new THREE.MeshPhongMaterial({
          color: 0xBC55EF,
          side: THREE.DoubleSide,
          emissive: 0xA83CA8,
          metalness: 0,
        })}
        position={[generateRandom(), generateRandom(), generateRandom()]}
        rotation={[generateRandom(), generateRandom(), generateRandom()]}
        scale={[scale, scale, scale]}
      />
    );
  }

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 5]} castShadow />
      <pointLight position={[-5, -10, -15]} intensity={0.5} />
      <group ref={groupRef}>
        <mesh>
          <torusKnotGeometry args={[0.9,0.3,300,10,2,5]}/>
          <meshPhysicalMaterial
            color={0xffffff}
            emissive={0xffffff}
            side={THREE.DoubleSide} 
            roughness={1}
            metalness={1}
            flatShading={false}
            clearcoat={1}
            clearcoatRoughness={0}
            transmission={0}
            thickness={1}
            ior={1.5}
          />
        </mesh>
        {meshes}
      </group>
    </>
  );
};

export default function Elem3D() {
  return <Scene />;
}
