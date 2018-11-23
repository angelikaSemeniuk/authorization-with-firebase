export function checkOnAuthStateChanged(user) {
    return function (dispatch) {
        dispatch({type: "CHECK_ON_AUTH_STATE_CHANGED", value: user});
    }
}

export function changeLogin(login) {
    return {
        type: "CHANGE_USER_LOGIN",
        value: login

    }
}

export function changePassword(password) {
    return {
        type: "CHANGE_USER_PASSWORD",
        value: password
    }
}

export function catchError(error) {
    return {
        type: "CATCH_ERROR",
        value: error
    }
}

export function makeSubmitOnSignUpForm() {
    return {
        type: "MAKE_SUBMIT_ON_SIGN_UP"
    }

}