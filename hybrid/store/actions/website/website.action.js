import ACTION_TYPES from "../ACTION_TYPES";

const setProjectConstants = () => {
    return async dispatch => {
        return dispatch({
            type: ACTION_TYPES.WEBSITE.setProjectConstants,
            payload: {
                projectName: 'Static portfolio'
            }
        })
    }
};

export default {setProjectConstants};

