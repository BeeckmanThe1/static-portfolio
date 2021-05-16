import React, {useEffect} from 'react';
import classnames from 'classnames';

const ControlledCarousel = ({isFullScreenMode, amountToShow, amountToSkip, children, activeIndex, setActiveIndex, imgClickCallback, maxActiveIndex}) => {

    const childrenArr = !children?.length ? [children] : children;
    const newAmountToShow = isFullScreenMode ? 1 : amountToShow;
    const newAmountToSkip = isFullScreenMode ? 1 : amountToSkip;

    const slotPercentageRelativeToViewport = 100 / newAmountToShow;

    const translationValue = `-${activeIndex * slotPercentageRelativeToViewport}%`;

    useEffect(() => setActiveIndex(activeIndex), [isFullScreenMode, activeIndex]);

    return <div className={classnames('rs-carousel-wrapper', {'rs-full-screen-carousel-wrapper': isFullScreenMode})}>
        <div className={classnames('rs-carousel', {'rs-fullscreen-carousel': isFullScreenMode})}>

            <div className={'rs-carousel-viewport'}>
                <div className={'rs-swipe-wrapper'} style={{transform: `translateX(${translationValue})`}}>
                    {childrenArr.map((item, index) => <div onClick={() => {
                        imgClickCallback(index);
                    }} className={'rs-carousel-slot'} style={{
                        flexBasis: `${slotPercentageRelativeToViewport}%`
                    }}>
                        {item}
                    </div>)}
                </div>
                {activeIndex !== 0 &&
                <div onClick={() => setActiveIndex(activeIndex - newAmountToSkip)}
                    className={'rs-arrow-wrapper rs-left-arrow-wrapper'}></div>}
                {activeIndex !== maxActiveIndex &&
                <div onClick={() => setActiveIndex(activeIndex + newAmountToSkip)}
                    className={'rs-arrow-wrapper rs-right-arrow-wrapper'}></div>}
            </div>
        </div>
    </div>;
};

export default ControlledCarousel;
