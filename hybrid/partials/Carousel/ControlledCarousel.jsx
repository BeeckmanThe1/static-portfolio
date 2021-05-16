import React, {useEffect} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const ControlledCarousel = ({isFullScreenMode, amountToShow, amountToSkip, children, activeIndex, setActiveIndex, imgClickCallback, maxActiveIndex}) => {
    const childrenArr = !children?.length ? [children] : children;
    const newAmountToShow = isFullScreenMode ? 1 : amountToShow;
    const newAmountToSkip = isFullScreenMode ? 1 : amountToSkip;

    const slotPercentageRelativeToViewport = 100 / newAmountToShow;

    const translationValue = `-${activeIndex * slotPercentageRelativeToViewport}%`;

    useEffect(() => setActiveIndex(activeIndex), [isFullScreenMode, activeIndex]);

    const handleLeftArrowClick = () => setActiveIndex(activeIndex - newAmountToSkip);
    const handleRightArrowClick = () => setActiveIndex(activeIndex + newAmountToSkip);

    return <div className={classnames('rs-carousel-wrapper', {'rs-full-screen-carousel-wrapper': isFullScreenMode})}>
        <div className={classnames('rs-carousel', {'rs-fullscreen-carousel': isFullScreenMode})}>

            <div className={'rs-carousel-viewport'}>
                <div className={'rs-swipe-wrapper'} style={{transform: `translateX(${translationValue})`}}>
                    {childrenArr.map((item, index) => <div key={`rs-carousel-slot-${index}`} onClick={() => {
                        imgClickCallback(index);
                    }} className={classnames('rs-carousel-slot', `rs-carousel-slot-${index}`)} style={{
                        flexBasis: `${slotPercentageRelativeToViewport}%`
                    }}>
                        {item}
                    </div>)}
                </div>
                {activeIndex !== 0 &&
                <div onClick={handleLeftArrowClick} className={'rs-arrow-wrapper rs-left-arrow-wrapper'}></div>}
                {activeIndex !== maxActiveIndex &&
                <div onClick={handleRightArrowClick} className={'rs-arrow-wrapper rs-right-arrow-wrapper'}></div>}
            </div>
        </div>
    </div>;
};

ControlledCarousel.propTypes = {
    isFullScreenMode: PropTypes.bool,
    amountToShow: PropTypes.number,
    amountToSkip: PropTypes.number,
    activeIndex: PropTypes.number,
    children: PropTypes.string,
    setActiveIndex: PropTypes.func,
    imgClickCallback: PropTypes.func,
    maxActiveIndex: PropTypes.number
};

export default ControlledCarousel;
