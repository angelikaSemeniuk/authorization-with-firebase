import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import firebase from "firebase";
import { setCurrentUser, handleSignOutOfUser, catchError } from "../action";

class Home extends React.Component {

    componentDidMount () {
        const { currentUser } = firebase.auth();
        console.error("firebase.auth()",  currentUser );
        this.props.setCurrentUser(currentUser.email);
    }

    handleSignOut () {
        firebase.auth().signOut().then(
            () => {
                console.error("action-handleSignOut");
                this.props.handleSignOutOfUser();
            }
        )
            .catch((error) => this.props.catchError(error))
    }

    render() {
        console.error("action-authorized", this.props.authorized);
        return(
            <>
                {!this.props.authorized ? <Redirect to="/"/> :
                        <div className="form-navigation">
                            <p dangerouslySetInnerHTML={{__html: "Welcome, " + this.props.currentUser}}></p>
                            <button onClick={this.handleSignOut.bind(this)}>Sign out</button>
                        </div>
                }
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        authorized: state.authorized
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: (currentUser) => {
            dispatch(setCurrentUser(currentUser));
        },
        handleSignOutOfUser: () => {
            dispatch(handleSignOutOfUser());
        },
        catchError: (error) => {
            dispatch(catchError(error));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);