import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { CubeCamera, MeshRefractionMaterial , OrbitControls } from '@react-three/drei';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

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

const vertices = [
  // 상단 꼭지점
  0, 1, 0,
  // 상단 면의 꼭지점들
  -0.5, 0.5, 0.5,
  0.5, 0.5, 0.5,
  0.5, 0.5, -0.5,
  -0.5, 0.5, -0.5,
  // 첫 번째 단의 꼭지점들
  -0.75, 0, 0.75,
  0.75, 0, 0.75,
  0.75, 0, -0.75,
  -0.75, 0, -0.75,
  // 하단 면의 꼭지점
  0, -1, 0
];

const indices = [
  // 상단 면
  0, 1, 2,  0, 2, 3,  0, 3, 4,  0, 4, 1,
  // 상단 면에서 첫 번째 단의 면들
  1, 5, 6,  1, 6, 2,  2, 6, 7,  2, 7, 3,
  3, 7, 8,  3, 8, 4,  4, 8, 5,  4, 5, 1,
  // 첫 번째 단의 면들
  5, 9, 6,  6, 9, 7,  7, 9, 8,  8, 9, 5,
  // 하단 면
  9, 6, 5,  9, 7, 6,  9, 8, 7,  9, 5, 8
];

const Diamond = ({ texture }) => {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.01));

  return (
    <mesh ref={ref}>
      <polyhedronGeometry args={[vertices, indices, 1, 0]} />
      <MeshRefractionMaterial
        envMap={texture}
        toneMapped={false}
        bounces={6}
        aberrationStrength={0.03}
        ior={2.75}
        fresnel={1}
        color="white"
        fastChroma={true}
      />
    </mesh>
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

  const texture = useLoader(RGBELoader, process.env.PUBLIC_URL + '/3d_photo.hdr')

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 1, 0]} />
      <directionalLight position={[1, 2, 8]} intensity={0.7} />
      <CubeCamera resolution={1024} frames={1} envMap={texture}>
        {(texture) => (
          <Diamond texture={texture}/>
        )}
      </CubeCamera>
      <group ref={groupRef}>
        {meshes}
      </group>

      {/* <OrbitControls />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 5]} castShadow />
      <pointLight position={[-5, -10, -15]} intensity={0.5} />
      <group ref={groupRef}>
        <mesh>
          <torusKnotGeometry args={[0.9,0.3,300,10,2,5]}/>
          <meshPhysicalMaterial
            color={0xBC55EF}
            emissive={0xA83CA8}
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
      </group> */}
    </>
  );
};

export default function Elem3D() {
  return <Scene />;
}
