import React from 'react';
import SandboxSections from "./sections/index.jsx";

const Sandbox = () => {
    return <>
        <SandboxSections.SandboxIntro/>
        <SandboxSections.CarouselSection/>
        <SandboxSections.RibbonCardSection/>
    </>
};

export default Sandbox;
