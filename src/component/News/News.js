import React, {useEffect} from "react";
import {getNewsFeed} from "../Redux/NewsFeed/NewsFeedReducer";
import {connect} from "react-redux";
import {getNews} from "../Redux/NewsFeed/NewsFeedSelectors";
import style from "./News.module.sass"
import NewsItem from "./NewsItem/NewsItem";

const News = ({getNewsFeed, news}) => {

    useEffect(() => {
        getNewsFeed({filters: "post"});
    }, []);

    return (
        <div className={style.container}>
            {news.map(newsItem => {
                return <NewsItem key={newsItem.post_id || 0} {...newsItem} />
            })}
            {/*{news.map(item => {*/}
            {/*    return (*/}
            {/*        <div key={item.key}>*/}
            {/*            <AvaSmall ava={item.ava} name={item.name} />*/}
            {/*            <p>{item.name}</p>*/}
            {/*            <p>{item.message}</p>*/}
            {/*            <p>Колличество нажатий на кнопку {count}</p>*/}
            {/*            <button onClick={() => setCount(count + 1)}>Нажми на меня</button>*/}
            {/*        </div>*/}
            {/*    );*/}
            {/*})}*/}
        </div>
    );
};

let mapStateToProps = (state) => ({
    news: getNews(state)
});
export default connect(mapStateToProps, {getNewsFeed})(News);
