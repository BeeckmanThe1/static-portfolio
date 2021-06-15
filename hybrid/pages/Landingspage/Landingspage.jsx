import React from 'react';
import WEBSITE_SETUP from '../../../server/WEBSITE_SETUP';

const LandingsPage = () => {
    return <>
        <h1>Index</h1>
        <ul>
            {WEBSITE_SETUP.ALL_PAGES.map(PAGE => PAGE?.SLUG !== '/' && <li key={PAGE.TITLE}><a href={PAGE?.SLUG}>{PAGE?.TITLE}</a></li>)}
        </ul>
    </>;
};

export default LandingsPage;
