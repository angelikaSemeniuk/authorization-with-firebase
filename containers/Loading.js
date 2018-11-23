import React from "react";
import firebase from "firebase";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { checkOnAuthStateChanged } from "../action";

class Loading extends React.Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged( user => {
            console.error("action-user", user);
            this.props.checkOnAuthStateChanged(user);
        });
    }

    render() {
        if (!this.props.onAuthStateChangedCalled) {
            return <div>Loading</div>
        }
        if (this.props.authorized) {
            return <Redirect to="/home"/>
        } else {
            return <Redirect to="/sign-in"/>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        onAuthStateChangedCalled: state.onAuthStateChangedCalled,
        authorized: state.authorized
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        checkOnAuthStateChanged: (user) => {
            dispatch(checkOnAuthStateChanged(user));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);