export const getNews = (state) => {
    return state.newsFeed.items.map(item => {
        let author;
        (item.source_id < 0)
            ? author = state.newsFeed.groups.find(newsItem => newsItem.id === Math.abs(item.source_id))
            : author = state.newsFeed.profiles.find(newsItem => newsItem.id === Math.abs(item.source_id));
        return {
            ...item,
            author
        };
    });
};


// export const getNews = (state) => {
//     return state.newsFeed.items.map(item => {
//             let id = item.source_id;
//             let type = "";
//             (id < 0) ? type = "group" : type = "user";
//             id = Math.abs(id);
//             let name = "";
//             let ava = "";
//             switch (type) {
//                 case "group":
//                     let group = state.newsFeed.groups.find(item => item.id === id);
//                     name = group.name;
//                     ava = group.photo_50;
//                     break;
//                 case "user":
//                     let user = state.newsFeed.profiles.find(item => item.id === id);
//                     name = `${user.first_name} ${user.last_name}`;
//                     ava = user.photo_50;
//             }
//             return {
//                 id,
//                 key: item.post_id,
//                 message: item.text,
//                 name,
//                 ava,
//             }
//         }
//     );
// };
