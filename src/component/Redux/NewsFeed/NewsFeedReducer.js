import {newsFeedAPI} from "../../../api/api";

const SET_NEWSFEED = "userReducer/SET_NEWSFEED";

const initialState = {
    groups: [{
        id: 0,
        name: "Test Group",
        photo_50: ""
    }],
    items: [{
        source_id: 0,
        text: "Test text news"
    }],
    next_from: "",
    profiles: [{
        id: 0,
        first_name: "Test",
        last_name: "User",
        photo_50: ""
    }]
};
const newsFeedReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWSFEED:
            return {
                ...state,
                ...action.state
            };
        default:
            return state;
    }
};
export default newsFeedReducer;

const setNewsFeed = (state) => ({type: SET_NEWSFEED, state});
export const getNewsFeed = (props = {}) => {
    return async (dispatch) => {
        let response = await newsFeedAPI.get(props)
        if (response.error) {
            console.error(response.error.error_msg, response.error);
        } else {
            console.log(response.response);
            dispatch(setNewsFeed(response.response));
        }
    }
};
