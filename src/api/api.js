import fetchJsonp from "fetch-jsonp"

const access_token = "728e4b41739ca1edd163b633e6ccca7b5f09e29df228644e561c5b17d884508dcedfef9a8328ac74c7b15";
const base_url = "https://api.vk.com/method/";
const v = "5.103";

export const usersAPI = {
    get(user_ids = "", fields = "", name_case = "") {
        return fetchJsonp(`${base_url}users.get?user_ids=${user_ids}&fields=${fields}&name_case=${name_case}&v=${v}&access_token=${access_token}`)
            .then(function (response) {
                return response.json();
            });
    }
};

export const messagesAPI = {
    getConversations(offset = 0) {
        return fetchJsonp(`${base_url}messages.getConversations?offset=${offset}&v=${v}&access_token=${access_token}`)
            .then(function (response) {
                return response.json();
            });
    }
};
export const newsFeedAPI = {
    get(props={}) {
        let url = base_url;
        url += `newsfeed.get?v=${v}&access_token=${access_token}`;
        props.filters && (url += "&filters=" + props.filters);
        props.return_banned && (url += "&return_banned=" + props.return_banned);
        props.start_time && (url += "&start_time=" + props.start_time);
        props.end_time && (url += "&end_time=" + props.end_time);
        props.max_photos && (url += "&max_photos=" + props.max_photos);
        props.source_ids && (url += "&source_ids=" + props.source_ids);
        props.start_from && (url += "&start_from=" + props.start_from);
        props.count && (url += "&count=" + props.count);
        props.fields && (url += "&fields=" + props.fields);
        props.section && (url += "&section=" + props.section);
        return fetchJsonp(url)
            .then(function (response) {
                return response.json();
            });
    }
};
