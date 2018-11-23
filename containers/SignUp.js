import React from "react";
import { connect } from "react-redux";

class SignUp extends React.Component {
    render() {
        return(
            <div>
                {/*<form onSubmit={this.props.handleSubmitOnSignUpForm.bind(this)}>
                    <input type="text" value={this.props.login} onChange={this.props.changeLogin.bind(this)} placeholder="Login" />
                    <input type="password" value={this.props.password} onChange={this.props.changePassword.bind(this)} placeholder="Password" />
                    <input type="submit" value="Submit"/>
                </form>*/}
            </div>
        );
    }
}

export default SignUp;