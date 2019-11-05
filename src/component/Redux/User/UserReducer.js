import {usersAPI} from "../../../api/api";

const SET_USER = "userReducer/SET_USER";

const initialState = {
    id: null,
    first_name: null,
    last_name: null,
    is_closed: null,
    can_access_closed: null,
    photo_200: null,
    status: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                ...action.state
            };
        default:
            return state;
    }
};
export default userReducer;

const setUserInfo = (state) => ({type: SET_USER, state});
export const getUserInfo = (user_ids, fields, name_case) => {
    return async (dispatch) => {
        let response = await usersAPI.get(user_ids, fields, name_case);
        dispatch(setUserInfo(response.response[0]));
    };
};
