import {getPageHtml} from '../htmlTemplating/templateProvider';
import WEBSITE_SETUP from '../WEBSITE_SETUP';
import websiteStoreProvider from "../../hybrid/store/websiteStoreProvider";

const init = async router => {

    const sharedStore = await websiteStoreProvider.createAndPopulateStore();

    //set up routing of all pages
    WEBSITE_SETUP.ALL_PAGES.map(PAGE => router.get(PAGE.SLUG, async (req, res) => {
        const html = await getPageHtml(PAGE, sharedStore);
        return res.send(html);
    }));
};

export default {init};
