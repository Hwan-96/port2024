import React, { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { Caustics, useGLTF, CubeCamera, MeshRefractionMaterial , OrbitControls } from '@react-three/drei';
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

const Diamond = ({ texture }) => {


  const ref = useRef();
  useFrame(() => { // diamond 모델링 애니메이션
    if (ref.current) {
      ref.current.rotation.y += 0.001;
    }
  });
  const { nodes } = useGLTF('/dflat.glb')
  return (
    <mesh castShadow ref={ref} geometry={nodes.Diamond_1_0.geometry}
    rotation={[0.5, 0.5, 0]} position={[0, 0, 0]}>
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

  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const handleMouseMove = (event) => {
    mouseX.current = ((event.clientX - window.innerWidth / 2) / window.innerWidth) * 15;
    mouseY.current = -((event.clientY - window.innerHeight / 2) / window.innerHeight) * 15;
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 카메라 마우스 위치 반응
  useFrame(({ camera }) => {
    camera.position.x += (mouseX.current - camera.position.x) * 0.05;
    camera.position.y += (mouseY.current - camera.position.y) * 0.05;
    camera.lookAt(groupRef.current.position);
  });

  const generateRandom = (k = 10) => -Math.random() * k + Math.random() * k;

  const groupRef = useRef();

  useFrame(() => { // 전체 Scene 애니메이션
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.001;
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x += 0.001;
    }
  });

  const meshes = []; // 주변 부유물
  for (let i = 0; i < 300; i++) {
    const scale = 0.05 + Math.abs(generateRandom(0.03));
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xBC55EF,
      side: THREE.DoubleSide,
      flatShading: true,
      emissive: 0xA83CA8,
      metalness: 0,
    })
    meshes.push(
      <CustomMesh
        key={i}
        geometry={new THREE.CircleGeometry(1, 3)}
        material={ material }
        position={[generateRandom(), generateRandom(), generateRandom()]}
        rotation={[generateRandom(), generateRandom(), generateRandom()]}
        scale={[scale, scale, scale]}
      />
    );
  }

  const texture = useLoader(RGBELoader, process.env.PUBLIC_URL + '/3d_photo.hdr')

  return (
    <>
      {/* <OrbitControls /> */}
      {/* <ambientLight intensity={0.5 * Math.PI} />
      <spotLight decay={0} position={[5, 5, -10]} angle={0.15} penumbra={1} />
      <pointLight decay={0} position={[-10, -10, -10]} /> */}
      <ambientLight color={0x7829367} intensity={0.2} />
      <pointLight color={0x16711935} intensity={1} position={[10, 10, 5]} castShadow />
      <pointLight color={0x8913151} intensity={0.5} position={[-5, -10, -15]} />
      <CubeCamera resolution={1024} frames={1} envMap={texture}>
        {(texture) => (
          <Diamond texture={texture} 
          rotation={[0, 0, 0.715]}
          position={[0, -0.175 + 0.5, 0]}/>
        )}
      </CubeCamera>
      <group ref={groupRef}>
        {meshes}
      </group>
    </>
  );
};

export default function Elem3D() {
  return (
    <Scene />
  );
}
