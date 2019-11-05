import React from "react";
import User from "../User/User";
import {Route, withRouter} from "react-router-dom";
import MessagesContainer from "../MessagesContainer/MessagesContainer";
import News from "../News/News";
import style from "./Content.module.sass"

const Content = () => {
    return (
        <div className={style.container}>
            <Route exact path="/" render={() => <User />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/messages" render={() => <MessagesContainer />} />
        </div>
    );
};
export default withRouter(Content);
