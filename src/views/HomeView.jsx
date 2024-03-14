import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Port from "../components/Port";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skip from "../components/Skip";
import Main from "../components/Main";
import Load from "../components/Load";

import ThreeDIntro from "../components/3DIntro";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const HomeView = () => {
    return (
    <>
        <Load />
        <Skip />
        <Header />
        <Main>
            <>
            <Canvas>
                <OrbitControls autoRotate={true}/>
                <mesh>
                    <boxGeometry args={[1,1,1]} />
                    <ambientLight intensity={1} />
                    <directionalLight position={[-1,0,1]} intensity={0.5} />
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial attach="material" color={0xa3b18a}/>
                </mesh>
            </Canvas>
            </>
            <Intro />
            <Skill />
            <Site />
            <Port />
            <Contact />
        </Main>
        <Footer />
    </>
    );
};

export default HomeView;