import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from "../../CONSTANTS";


export const Picture = ({XS, SM, MD, LG, XL, src, alt}) => {

    const {LG, MD, SM, XS} = CONSTANTS.BREAKPOINTS;
    return <picture>

        {XL ? <source media={`(min-width: ${LG.MAX_WIDTH + 1}px)`}
                      srcSet={XL}/> : null}
        {LG ? <source media={`(min-width: ${MD.MAX_WIDTH + 1}px)`}
                      srcSet={LG}/> : null}
        {MD ? <source media={`(min-width: ${SM.MAX_WIDTH + 1}px)`}
                      srcSet={MD}/> : null}
        {SM ? <source media={`(min-width: ${XS.MAX_WIDTH + 1}px)`}
                      srcSet={SM}/> : null}
        {XS ? <source media={`(min-width: 0)`} srcSet={XS}/> : null}


        <img {...{src: XS || SM || MD || LG || XL || src, alt}}/>
    </picture>;
};

Picture.propTypes = {
    XS: PropTypes.string,
    SM: PropTypes.string,
    MD: PropTypes.string,
    LG: PropTypes.string,
    alt: PropTypes.string.isRequired,
    type: PropTypes.shape({
        [CONSTANTS.CSS_CLASSES_KEY]: PropTypes.arrayOf(PropTypes.string)
    }),
};
