import React from "react";
import UserHeader from "./UserHeader";
import {connect} from "react-redux";
import {getUserAvatar, getUserFirstName, getUserLastName, getUserStatus} from "../../Redux/User/UserSelectors";

const UserHeaderContainer = (props) => {
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
export default connect(mapStateToProps)(UserHeaderContainer);
