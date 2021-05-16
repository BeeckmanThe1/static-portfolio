import React from 'react';
import {withKnobs, boolean, number} from '@storybook/addon-knobs';
import CarouselComponent from '../Carousel';
import '../../../../client/styles/styles.scss';

const config = {
    title: 'Partials/Carousel',
    component: CarouselComponent,
    decorators: [withKnobs],
};

const getChildren = (amount) => {
    const imgSize = 420;
    return new Array(amount).fill('').map((curr, index) => <img src={`https://picsum.photos/${imgSize + index}`}/>)
}

export const Carousel = () => {
    const numberOfChildren = number('amount of images', 4, undefined, 'Children settings');
    return <div style={{height: '420px'}}>
        <CarouselComponent {...{
            isFullScreenMode: boolean('isFullScreenMode', false, 'Properties'),
            amountToShow: number('amountToShow', 1, undefined, 'Properties'),
            amountToSkip: number('amountToSkip', 1, undefined, 'Properties')
        }}>
            {getChildren(numberOfChildren).map(child => <>{child}</>)}
        </CarouselComponent>
    </div>
};

export default config;
