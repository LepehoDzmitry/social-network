import React from "react";
import style from "./Sidebar.module.sass"
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={style.sadeBarContainer}>
            <nav className={style.sadeBar}>
                <NavLink exact to="/" className={style.link} activeClassName={style.activeLink}>Моя страница</NavLink>
                <NavLink to="/news" className={style.link} activeClassName={style.activeLink}>Новости</NavLink>
                <NavLink to="/messages" className={style.link} activeClassName={style.activeLink}>Сообщения</NavLink>
            </nav>
        </div>
    );
};
export default Sidebar;
