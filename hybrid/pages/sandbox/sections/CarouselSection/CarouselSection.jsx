import React from 'react';
import CarouselWithFullScreenMode from "../../../../partials/Carousel/CarouselWithFullScreenMode.jsx";

const CarouselSection = () => {
    return <section className={'stp-carousel-section'}>
        <h2>Carousel</h2>
        <div className={'stp-carousel-wrapper'}>
            <CarouselWithFullScreenMode {...{amountToShow: 3}}>
                <img src={'https://picsum.photos/475'}/>
                <img src={'https://picsum.photos/476'}/>
                <img src={'https://picsum.photos/477'}/>
                <img src={'https://picsum.photos/478'}/>
                <img src={'https://picsum.photos/479'}/>
            </CarouselWithFullScreenMode>
        </div>
    </section>
};

export default CarouselSection;
