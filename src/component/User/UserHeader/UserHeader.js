import React from "react";
import style from "./UserHeader.module.sass"
import fonPhoto from "../../../assets/images/phone-photo-image.jpg"

const UserHeader = ({avaImg, lastName, firstName, status}) => {
    return (
        <div className={style.userPhotoContainer}>
            <img className={style.fonPhoto} src={fonPhoto} alt=""/>
            <img className={style.avaImg} src={avaImg} alt=""/>
            <div className={style.mainInfoContainer}>
                <h1 className={style.name}>{firstName} {lastName}</h1>
                <p className={style.status}>{status}</p>
            </div>
        </div>
    );
};
export default UserHeader;
