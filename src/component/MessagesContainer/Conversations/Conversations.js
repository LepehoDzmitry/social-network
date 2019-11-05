import React, { useEffect } from "react";
import style from "./Conversations.module.sass"
import ConversationsItem from "./ConversationsItem/ConversationsItem";
import {connect} from "react-redux";
import {getConversations} from "../../Redux/Messages/MessagesSelectors";
import {getConversationsAPI} from "../../Redux/Messages/MessagesReducer";

const Conversations = ({conversations, getConversationsAPI}) => {
    useEffect(() => {
        getConversationsAPI();
    });
    return (
        <div className={style.container}>
            {conversations.map(item => <ConversationsItem key={item.id} message={item.message} name={item.name}
                                                          ava={item.ava}/>)}
        </div>
    );
};
let mapStateToProps = (state) => ({
    conversations: getConversations(state)
});
export default connect(mapStateToProps, {getConversationsAPI})(Conversations);
