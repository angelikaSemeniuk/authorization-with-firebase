import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { changeLogin, changePassword } from "../action";

class Login extends React.Component {
    render () {
        return (
            <div>
                <form>
                    <input type="text" value={this.props.login} onChange={this.props.changeLogin.bind(this)} placeholder="Login" />
                    <input type="password" value={this.props.password} onChange={this.props.changePassword.bind(this)} placeholder="Password" />
                    <div className="buttons-container">
                        <input type="submit" value="Submit"/>
                        <Link to="/sign-up">Sign Up</Link>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
        password: state.password,
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