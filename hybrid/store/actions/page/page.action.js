import ACTION_TYPES from "../ACTION_TYPES";

const setPageInfo = pageInfo => {
    return {
        type: ACTION_TYPES.PAGE.setPageInfo,
        payload: pageInfo
    }
};

export default {setPageInfo};

