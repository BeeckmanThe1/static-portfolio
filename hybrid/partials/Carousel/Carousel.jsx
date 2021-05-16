import React, {useState, useEffect} from 'react';
import ControlledCarousel from "./ControlledCarousel.jsx";
import PropTypes from "prop-types";

const Carousel = ({amountToShow, amountToSkip, fullScreenImages, children, isFullscreenModeDisabled}) => {
    const [isFullScreenMode, setIsFullScreenMode] = useState(false);
    const [activeIndexDefaultCarousel, setActiveIndexDefaultCarousel] = useState(0);
    const [activeIndexFullScreenCarousel, setActiveIndexFullScreenCarousel] = useState(0);

    const getMaxActiveIndex = isFullScreen => (children?.length || 1) - (isFullScreen ? 1 : (amountToShow || 1));   // if no infinite

    const getContainedActiveIndex = (theoreticActiveIndex) => {
        const maxActiveIndex = getMaxActiveIndex(true);
        return theoreticActiveIndex < 0 ? 0 : theoreticActiveIndex > maxActiveIndex ? maxActiveIndex : theoreticActiveIndex
    };

    const setContainedActiveIndexDefaultCarousel = index => {
        setActiveIndexDefaultCarousel(getContainedActiveIndex(index));
    }

    const setContainedActiveIndexFullscreenCarousel = (index, isFullScreen) => {
        setActiveIndexFullScreenCarousel(getContainedActiveIndex(index, isFullScreen));
    }

    const toggleFullScreenMode = () => !isFullscreenModeDisabled && setIsFullScreenMode(prev => !prev);

    const handleImgClickFromDefaultCarousel = activeIndex => {
        toggleFullScreenMode();
        setContainedActiveIndexFullscreenCarousel(activeIndex, true);
    }
    const handleImgClickFromFullscreenCarousel = () => {
        toggleFullScreenMode();
    }

    const sharedCarouselSettings = {
        amountToShow: amountToShow || 1,
        amountToSkip: amountToSkip || 1
    };

    // todo: move somewhere else!
    function debounced(delay, fn) {
        let timerId;
        return function (...args) {
            if (timerId) {
                clearTimeout(timerId);
            }
            timerId = setTimeout(() => {
                fn(...args);
                timerId = null;
            }, delay);
        }
    }

    const keyPressedHandler = e => {
        if (isFullScreenMode) {
            if (e.keyCode === 27) {
                toggleFullScreenMode();
            } else if (e.keyCode === 37) {
                setContainedActiveIndexFullscreenCarousel(activeIndexFullScreenCarousel - 1);
            } else if (e.keyCode === 39) {
                setContainedActiveIndexFullscreenCarousel(activeIndexFullScreenCarousel + 1);
            }
        }
    }

    const debouncedKeyPressedHandler = debounced(200, keyPressedHandler);

    useEffect(() => {
        document.addEventListener("keydown", debouncedKeyPressedHandler);
        return () => {
            document.removeEventListener("keydown", debouncedKeyPressedHandler);
        };
    }, [isFullScreenMode, activeIndexFullScreenCarousel]);

    return <div className={'stp-carousel'}>

        <ControlledCarousel {...{
            ...sharedCarouselSettings, isFullScreenMode: false, activeIndex: activeIndexDefaultCarousel,
            setActiveIndex: setContainedActiveIndexDefaultCarousel,
            imgClickCallback: handleImgClickFromDefaultCarousel,
            maxActiveIndex: getMaxActiveIndex(false)
        }}>
            {children}
        </ControlledCarousel>

        {isFullScreenMode && <>
            <ControlledCarousel {...{
                ...sharedCarouselSettings, isFullScreenMode: true, activeIndex: activeIndexFullScreenCarousel,
                setActiveIndex: setContainedActiveIndexFullscreenCarousel,
                imgClickCallback: () => {
                },
                maxActiveIndex: getMaxActiveIndex(true)
            }}>
                {fullScreenImages || children}
            </ControlledCarousel>
            <div className={'rs-toggle-fullmode-cta-wrapper'}>
                <span onClick={toggleFullScreenMode}>❌</span>
            </div>
        </>
        }

    </div>
}

Carousel.propTypes = {
    /** Is this the principal call to action on the page?*/
    amountToShow: PropTypes.number,
    amountToSkip: PropTypes.number,
    isFullscreenModeDisabled: PropTypes.bool,
    fullScreenImages: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

Carousel.defaultProps = {
    amountToShow: 1,
    amountToSkip: 1
};

export default Carousel;
