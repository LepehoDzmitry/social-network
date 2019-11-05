import React, { useEffect } from "react";
import UserHeader from "./UserHeader";
import {connect} from "react-redux";
import {getUserAvatar, getUserFirstName, getUserLastName, getUserStatus} from "../../Redux/User/UserSelectors";
import {getUserInfo} from "../../Redux/User/UserReducer";

const UserHeaderContainer = ({getUserInfo, ...props}) => {
    useEffect(() => {
        getUserInfo("382689277", "photo_200, status");
    });
    return (
        <UserHeader {...props}/>
    );
};
let mapStateToProps = (state) => {
    return ({
        avaImg: getUserAvatar(state),
        lastName: getUserLastName(state),
        firstName: getUserFirstName(state),
        status: getUserStatus(state)
    });
};
export default connect(mapStateToProps,{getUserInfo})(UserHeaderContainer);
