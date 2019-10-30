import React from "react";
import style from "./User.module.sass"
import UserPhotoContainer from "./UserHeader/UserHeaderContainer";

const User = () => {
    return (
        <div className={style.userContainer}>
            <UserPhotoContainer />
        </div>
    );
};
export default User;
