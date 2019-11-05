import React from "react";
import PostHeader from "../../common/PostHeader/PostHeader";

const NewsItem = (props) => {
    return (
        <>
            <PostHeader ava={props.author.photo_50}
                        name={props.author.name || `${props.author.first_name} ${props.author.last_name}`}
                        date={props.date}/>
            <p>{props.text}</p>
        </>
    );
};

export default NewsItem;
