import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import userReducer from "./User/UserReducer";
import messagesReducer from "./Messages/MessagesReducer";
import newsFeedReducer from "./NewsFeed/NewsFeedReducer";

const reducers = combineReducers({
    user: userReducer,
    conversation: messagesReducer,
    newsFeed: newsFeedReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
