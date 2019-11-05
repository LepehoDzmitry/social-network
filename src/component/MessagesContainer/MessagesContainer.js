import React from "react";
import style from "./MessagesContainer.module.sass"
import Conversations from "./Conversations/Conversations";
import Messages from "./Messages/Messages";

const MessagesContainer = () => {
    return (
        <div className={style.messagesContainer}>
            <Conversations />
            <Messages />
        </div>
    );
};
export default MessagesContainer;
