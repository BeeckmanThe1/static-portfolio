import _ from 'lodash';

export const setProjectPageInfo = (state, payload) => {
    const newState = _.cloneDeep(state);
    const newPageConstants = newState.websiteConstants = {};

    newPageConstants.title = payload?.TITLE;
    newPageConstants.metaDescription = payload?.META_DESCRIPTION;

    return newState;
};
