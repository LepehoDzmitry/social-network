import React from 'react';
import style from './App.module.sass';
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";
import {Provider} from "react-redux";
import store from "./component/Redux/store";
import Content from "./component/Content/Content";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className={style.app}>
                    <Header/>
                    <Sidebar/>
                    <Content/>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
