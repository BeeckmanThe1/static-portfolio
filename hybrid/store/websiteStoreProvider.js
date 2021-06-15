import createStore from '../../hybrid/store/store';
import websiteAction from '../../hybrid/store/actions/website/website.action';

const populateStore = store => {
    const promises = [];

    promises.push(store.dispatch(websiteAction.setProjectConstants()));

    return Promise.all(promises).then(() => store);
};

const createAndPopulateStore = () => {
    const store = createStore();

    return populateStore(store);
};

export default {
    createAndPopulateStore
};
