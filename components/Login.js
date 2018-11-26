import React from "react";
import { connect } from "react-redux";
import firebase from "firebase";
import { Link, Redirect } from "react-router-dom";
import { changeLogin, changePassword, makeSubmitOnSignInForm, catchError, handleChangingThePage } from "../action";

class Login extends React.Component {

    componentWillUnmount () {
        this.props.handleChangingThePage();
    }

    handleSignIn (login, password) {
        firebase.auth().signInWithEmailAndPassword(login, password)
            .then( () => {
                this.props.makeSubmitOnSignInForm();
            })
            .catch((error) => this.props.catchError(error))
    }

    render () {
        return (
            <>
                {this.props.submit ?
                    <Redirect to="/home"/> :
                    <div className="login">
                        {this.props.error && <p className="error" dangerouslySetInnerHTML={{__html: this.props.error}}></p>}
                        <p className="header"><strong>Sign In</strong></p>
                        <input type="text" value={this.props.login} onChange={this.props.changeLogin.bind(this)}
                               placeholder="Login"/>
                        <input type="password" value={this.props.password}
                               onChange={this.props.changePassword.bind(this)} placeholder="Password"/>
                        <button onClick={this.handleSignIn.bind(this, this.props.login, this.props.password)}>Submit</button>
                        <p className="footer">Here at first time? Click then <Link to="/sign-up"> Sign Up</Link>  and you'll be on board! </p>
                    </div>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
        password: state.password,
        submit: state.submit,
        error: state.error
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
        makeSubmitOnSignInForm: () => {
            dispatch(makeSubmitOnSignInForm());
        },
        catchError: (error) => {
            dispatch(catchError(error));
        },
        handleChangingThePage : () => {
            dispatch(handleChangingThePage());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);