import React from 'react';
import {getPageHtml} from '../htmlTemplating/templateProvider';
import WEBSITE_SETUP from '../WEBSITE_SETUP';

const init = async router => {

    //set up routing of all pages
    WEBSITE_SETUP.ALL_PAGES.map(PAGE => router.get(PAGE.SLUG, (req, res) => res.send(getPageHtml(PAGE))));

};

export default {init};
