import {getPageHtml} from '../htmlTemplating/templateProvider';
import WEBSITE_SETUP from '../WEBSITE_SETUP';
import websiteStoreProvider from "../../hybrid/store/websiteStoreProvider";

const init = async router => {

    const sharedStore = await websiteStoreProvider.createAndPopulateStore();

    //set up routing of all pages
    WEBSITE_SETUP.ALL_PAGES.map(PAGE => router.get(PAGE.SLUG, (req, res) => res.send(getPageHtml(PAGE, sharedStore))));
};

export default {init};
