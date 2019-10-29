import {usersAPI} from "../../api/api";

const GET_USER = "userReducer/GET_USER";

const initialState = {
    "id": null,
    "first_name": null,
    "last_name": null,
    "is_closed": null,
    "can_access_closed": null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                ...action.state
            };
        default:
            return state;
    }
};
export default userReducer;

const setUserInfo = (state) => ({type: GET_USER, state});
export const getUserInfo = async (user_ids, fields, name_case) => {
    // return async (dispatch) => {
    let response = await usersAPI.get(user_ids, fields, name_case);
    console.log(response.response[0]);
    // };
};
