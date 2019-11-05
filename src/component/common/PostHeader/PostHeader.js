import React from "react";
import style from "./PostHeader.module.sass"
import AvaSmall from "../AvaSmall/AvaSmall";
import {getRelativeDate} from "../helpers/helpers";

const PostHeader = ({ava, name, date}) => {
    let _date = getRelativeDate(date*1000);
    // let _date = (new Date(date*1000)).toLocaleString();
    return (
        <div className={style.container}>
            <AvaSmall ava={ava} name={name} />
            <div className={style.textContainer}>
                <p className={style.text}>{name}</p>
                <p className={style.subText}>{_date}</p>
            </div>
        </div>
    );
};

export default PostHeader;
