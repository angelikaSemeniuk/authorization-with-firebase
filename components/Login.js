import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { changeLogin, changePassword } from "../action";

class Login extends React.Component {

    handleSignIn () {

    }

    render () {
        return (
            <>
                {this.props.submit ?
                    <Redirect to="/home"/> :
                    <>
                        {this.props.error && <p style={{color: "red"}} dangerouslySetInnerHTML={{__html: this.props.error}}></p>}
                        <input type="text" value={this.props.login} onChange={this.props.changeLogin.bind(this)}
                               placeholder="Login"/>
                        <input type="password" value={this.props.password}
                               onChange={this.props.changePassword.bind(this)} placeholder="Password"/>
                        <button onClick={this.handleSignIn.bind(this)}>Submit</button>
                    </>
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);