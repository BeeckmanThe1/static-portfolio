import React from 'react';
import Pages from '../../pages/index';
import WEBSITE_SETUP from '../../../server/WEBSITE_SETUP';
import {renderToString} from 'react-dom/server';

const {PAGES} = WEBSITE_SETUP;

export default (PAGE, returnAsHtml) => {
    let jsx;
    switch (PAGE.ID) {
    case PAGES.SANDBOX.ID:
        jsx = <Pages.Sandbox/>;
        break;
    case PAGES.LANDING_PAGE.ID:
        jsx = <Pages.LandingPage/>;
        break;
    default:
        jsx = null;
        break;
    }
    return returnAsHtml ? renderToString(jsx) : jsx;
};
