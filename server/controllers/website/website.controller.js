import pageStoreProvider from '../../store/pageStoreProvider';
import templateProvider from '../../templates/templateProvider';

const processPage = async (request, response, options) => {

    return pageStoreProvider
        .populateStore({...options})
        .then(populatedStore => {
            response.send(templateProvider.getAllWebsiteSectionsAsHtml({...options, store: populatedStore}));
        });
};

export default {processPage};
