import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../containers/Home";
import Loading from "../containers/Loading";
import SignUp from "../containers/SignUp";
import Login from "./Login";

const App = () => {
    return(
        <Router>
            <>
                <Route exact path="/" component={Loading} />
                <Route path="/home" component={Home} />
                <Route path="/sign-up" component={SignUp}/>
                <Route path="/sign-in" component={Login}/>
            </>
        </Router>
    );
};

export default App;