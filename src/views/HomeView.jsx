import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Port from "../components/Port";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Load from "../components/Load";
import Elem3D from "../components/Elem3D";

import { Canvas } from "@react-three/fiber";

const HomeView = () => {
    return (
    <>
      <Load />
      <Header />
      <Main>
        <Canvas shadows camera={{ position: [-5, 0.5, 5], fov: 70 }} style={{ position: 'fixed', zIndex: -1}}>
          <Elem3D />
        </Canvas>
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