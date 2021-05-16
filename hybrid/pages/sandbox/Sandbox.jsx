import React from 'react';
import SandboxSections from './sections/index.jsx';
import ControlledCarousel from '../../partials/Carousel/ControlledCarousel.jsx';

const Sandbox = () => {
    return <>
        <SandboxSections.SandboxIntro/>
        <SandboxSections.CarouselSection/>
        <SandboxSections.RibbonCardSection/>
    </>;
};

export default Sandbox;
