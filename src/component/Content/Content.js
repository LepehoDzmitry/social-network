import React from "react";
import User from "../User/User";
import {Route, Switch, withRouter} from "react-router-dom";

const Content = (props) => {
    return (
        <Switch>
            <Route exact path="/" render={User} />
        </Switch>
    );
};
export default withRouter(Content);
