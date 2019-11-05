import {messagesAPI} from "../../../api/api";

const SET_CONVERSATIONS = "userReducer/SET_CONVERSATIONS";

const initialState = {
    count: null,
    items: [{
        conversation: {
            peer: {
                id: null,
                type: null,
                local_id: null
            }
        },
        last_message: {
            text: null
        }
    }],
    profiles: [
        {
            id: null,
            first_name: null,
            last_name: null,
            photo_50: null
        }],
    groups: [{
        id: null,
        name: null,
        photo_50: null
    }]
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONVERSATIONS:
            return {
                ...state,
                ...action.state
            };
        default:
            return state;
    }
};
export default messagesReducer;

const setConversations = (state) => ({type: SET_CONVERSATIONS, state});
export const getConversationsAPI = (offset = 0) => {
    return async (dispatch) => {
        let response = await messagesAPI.getConversations(offset);
        if (response.error) {
            console.error(response.error.error_msg, response.error);
        } else {
            dispatch(setConversations(response));
        }
    };
};
