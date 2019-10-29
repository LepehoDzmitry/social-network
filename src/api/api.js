import * as axios from "axios";
import fetchJsonp from "fetch-jsonp"

const access_token = "97bf5cdfc44f93271fc2ea1313a63d88bd05f8df8c52847d44b9fe647660aea6bc8f9d9fa68cc207f8bb0";
const base_url = "https://api.vk.com/method/";
const v = "5.103";

export const usersAPI = {
    get(user_ids = "", fields = "", name_case = "") {
        return fetchJsonp(`${base_url}users.get?user_ids=${user_ids}&fields=${fields}&name_case=${name_case}&v=${v}&access_token=${access_token}`)
            .then(function(response) {
                return response.json()
            })
            // .then(function(json) {
            //     console.log('parsed json', json)
            // }).catch(function(ex) {
            //     console.log('parsing failed', ex)
            // });
    }
};
