import React from "react";
import style from "./ConversationsItem.module.sass";

const ConversationsItem = ({message, name, ava}) => {
    return (
        <div className={style.item}>
            <img src={ava} alt={"Аватар пользователя" + name} className={style.ava}/>
            <div className={style.textContainer}>
                <p className={style.name}>{name}</p>
                <p className={style.message}>{message}</p>
            </div>
        </div>
    );
};

export default ConversationsItem;
