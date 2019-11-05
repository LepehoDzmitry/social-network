import React from "react";
import style from "./AvaSmall.module.sass"

const AvaSmall = ({ava, name}) => {
    return (
        <img src={ava} alt={"Аватар пользователя" + name} className={style.ava}/>
    );
};

export default AvaSmall;
