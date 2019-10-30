import {usersAPI} from "../../../api/api";

const GET_USER = "userReducer/GET_USER";

const initialState = {
    "id": 382689277,
    "first_name": "Дмитрий",
    "last_name": "Лепехо",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "nickname": "",
    "domain": "id382689277",
    "screen_name": "id382689277",
    "bdate": "9.9.1989",
    "country": {"id": 3, "title": "Беларусь"},
    "timezone": 3,
    "photo_50": "https://sun9-53.userapi.com/c836624/v836624277/2bc2d/0P7K5NRK2es.jpg?ava=1",
    "photo_100": "https://sun9-8.userapi.com/c836624/v836624277/2bc2c/IQ9HEpEHdrk.jpg?ava=1",
    "photo_200": "https://sun9-15.userapi.com/c855724/v855724919/f1092/qnDUKai-XIo.jpg?ava=1",
    "photo_max": "https://sun9-60.userapi.com/c836624/v836624277/2bc2b/ZkCZkWM7cpE.jpg?ava=1",
    "photo_200_orig": "https://sun9-57.userapi.com/c836624/v836624277/2bc2a/AqtQ0to0Ao0.jpg?ava=1",
    "photo_max_orig": "https://sun9-57.userapi.com/c836624/v836624277/2bc2a/AqtQ0to0Ao0.jpg?ava=1",
    "photo_id": "382689277_456239022",
    "has_photo": 1,
    "has_mobile": 1,
    "is_friend": 0,
    "friend_status": 0,
    "online": 1,
    "can_post": 1,
    "can_see_all_posts": 1,
    "can_see_audio": 1,
    "can_write_private_message": 1,
    "can_send_friend_request": 1,
    "mobile_phone": "",
    "home_phone": "",
    "site": "https://podstolya.by",
    "status": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut eos exercitationem ipsa iste minima, mollitia quae quos voluptatem voluptatum.",
    "last_seen": {"time": 1572450919, "platform": 7},
    "crop_photo": {
        "photo": {
            "id": 456239022,
            "album_id": -6,
            "owner_id": 382689277,
            "sizes": [{
                "type": "m",
                "url": "https://sun9-59.userapi.com/c836624/v836624277/2bc24/eEIMAOgbAws.jpg",
                "width": 126,
                "height": 130
            }, {
                "type": "o",
                "url": "https://sun9-10.userapi.com/c836624/v836624277/2bc26/53ycpUDCen0.jpg",
                "width": 130,
                "height": 134
            }, {
                "type": "p",
                "url": "https://sun9-36.userapi.com/c836624/v836624277/2bc27/UNrC8P4QCgE.jpg",
                "width": 200,
                "height": 207
            }, {
                "type": "q",
                "url": "https://sun9-14.userapi.com/c836624/v836624277/2bc28/nGDiL5WFF_4.jpg",
                "width": 320,
                "height": 331
            }, {
                "type": "r",
                "url": "https://sun9-67.userapi.com/c836624/v836624277/2bc29/SqYHszX5V9E.jpg",
                "width": 387,
                "height": 400
            }, {
                "type": "s",
                "url": "https://sun9-34.userapi.com/c836624/v836624277/2bc23/QSbzZU0M2d4.jpg",
                "width": 73,
                "height": 75
            }, {
                "type": "x",
                "url": "https://sun9-14.userapi.com/c836624/v836624277/2bc25/1Aw2-hZcydY.jpg",
                "width": 387,
                "height": 400
            }],
            "text": "",
            "date": 1487940084,
            "post_id": 2
        },
        "crop": {"x": 0.000000, "y": 0.000000, "x2": 100.000000, "y2": 100.000000},
        "rect": {"x": 0.000000, "y": 0.000000, "x2": 100.000000, "y2": 96.750000}
    },
    "verified": 0,
    "can_be_invited_group": true,
    "followers_count": 11,
    "blacklisted": 0,
    "blacklisted_by_me": 0,
    "is_favorite": 0,
    "is_hidden_from_feed": 0,
    "common_count": 0,
    "career": [],
    "military": [],
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "home_town": "",
    "relation": 0,
    "personal": {"langs": ["Русский"], "people_main": 0, "life_main": 0, "smoking": 0, "alcohol": 0, "religion_id": 0},
    "interests": "",
    "music": "",
    "activities": "",
    "movies": "",
    "tv": "",
    "books": "",
    "games": "",
    "universities": [],
    "schools": [],
    "about": "",
    "relatives": [],
    "quotes": ""
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
