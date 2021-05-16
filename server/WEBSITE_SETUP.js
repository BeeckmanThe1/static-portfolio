export default {
    PAGES: {
        SANDBOX: {
            ID: 'sandbox',
            WRAPPER_ID: 'sandbox-wrapper',
            SLUG: '/sandbox',
            TITLE: 'Sandbox',
            META_DESCRIPTION: 'This is a page meant for playing around with React component & partials.',
        },
        LANDING_PAGE: {
            ID: 'landing-page',
            WRAPPER_ID: 'landing-page-wrapper',
            SLUG: '/',
            TITLE: 'Index',
            META_DESCRIPTION: 'Development landingpage',
        }
    },
    get ALL_PAGES() {
        return Object.values(this.PAGES);
    }
};
