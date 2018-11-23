import React from "react";
import ReactDOM from "react-dom";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer/index";
import App from "./components/App";
import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCc6Uu7NCBfFaiXxIK7NkFacJLG3DNKGfw",
    authDomain: "authorization-with-firebase.firebaseapp.com",
    databaseURL: "https://authorization-with-firebase.firebaseio.com",
    projectId: "authorization-with-firebase",
    storageBucket: "authorization-with-firebase.appspot.com",
    messagingSenderId: "915758333614"
};
firebase.initializeApp(config);

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);