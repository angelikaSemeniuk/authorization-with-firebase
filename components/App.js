import React from "react";

class App extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            console.log("user", user);
        })
    }
    render() {
        return(
            <h1>Hello,world</h1>
        );
    }
}

export default App