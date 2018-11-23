import React from "react";
import { connect } from "react-redux";
import firebase from "firebase";
import { Redirect } from "react-router-dom";
import { changeLogin, changePassword, makeSubmitOnSignUpForm, catchError } from "../action";

class SignUp extends React.Component {

    handleSignUp () {
        firebase.auth().createUserWithEmailAndPassword(this.props.login, this.props.password)
            .then(() => {this.props.makeSubmitOnSignUpForm()})
            .catch((error) => this.props.catchError(error))
    }

    render () {
        return(
            <>
                {this.props.submit ?
                    <Redirect to="/home"/> :
                    <>
                        {this.props.error && <p style={{color: "red"}} dangerouslySetInnerHTML={{__html: this.props.error}}></p>}
                            <input type="text" value={this.props.login} onChange={this.props.changeLogin.bind(this)}
                                   placeholder="Login"/>
                            <input type="password" value={this.props.password}
                                   onChange={this.props.changePassword.bind(this)} placeholder="Password"/>
                            <button onClick={this.handleSignUp.bind(this)}>Submit</button>
                    </>
                }
            </>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
        password: state.password,
        error: state.error,
        submit: state.submit
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeLogin: (event) => {
            dispatch(changeLogin(event.target.value));
        },
        changePassword: (event) => {
            dispatch(changePassword(event.target.value));
        },
        makeSubmitOnSignUpForm: () => {
            dispatch(makeSubmitOnSignUpForm());
        },
        catchError: (error) => {
            dispatch(catchError(error));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);