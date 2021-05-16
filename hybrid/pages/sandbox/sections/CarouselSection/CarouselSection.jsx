import React from 'react';
import Carousel from "../../../../partials/Carousel/Carousel.jsx";

const CarouselSection = () => {
    return <section className={'stp-carousel-section'}>
        <h2>Carousel</h2>
        <h3>Default carousel</h3>
        <div className={'stp-carousel-wrapper'}>
            <Carousel {...{amountToShow: 3}}>
                <img src={'https://picsum.photos/475'}/>
                <img src={'https://picsum.photos/476'}/>
                <img src={'https://picsum.photos/477'}/>
                <img src={'https://picsum.photos/478'}/>
                <img src={'https://picsum.photos/479'}/>
            </Carousel>
        </div>
        <h3>Carousel without Fullscreen mode</h3>
        <div className={'stp-carousel-wrapper'}>
            <Carousel {...{amountToShow: 3, isFullscreenModeDisabled: true}}>
                <img src={'https://picsum.photos/475'}/>
                <img src={'https://picsum.photos/476'}/>
                <img src={'https://picsum.photos/477'}/>
                <img src={'https://picsum.photos/478'}/>
                <img src={'https://picsum.photos/479'}/>
            </Carousel>
        </div>
    </section>
};

export default CarouselSection;
