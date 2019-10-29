import React from "react";
import style from "./Sidebar.module.sass"

const Sidebar = () => {
    return (
        <div className={style.sadeBarContainer}>
            <nav className={style.sadeBar}>
                <a href="#">Моя страница</a>
                <a href="#">Новости</a>
                <a href="#">Сообщения</a>
            </nav>
        </div>
    );
};
export default Sidebar;
