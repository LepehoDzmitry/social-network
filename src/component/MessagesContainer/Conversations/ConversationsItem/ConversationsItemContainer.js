import React from "react";
import ConversationsItem from "./ConversationsItem";
import {connect} from "react-redux";

const ConversationsItemContainer = ({id, ...props}) => <ConversationsItem {...props} />

let  mapStateToProps = (state) => ({
    ava: getAva(state, id)
});
export default connect(mapStateToProps)(ConversationsItemContainer);
