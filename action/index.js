export function checkOnAuthStateChanged(user) {
    return {
        type: "CHECK_ON_AUTH_STATE_CHANGED",
        value: user
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

export function setCurrentUser( currentUser) {
    return {
        type: "SET_CURRENT_USER",
        value: currentUser
    }
}

export function handleSignOutOfUser() {
    return {
        type: "HANDLE_SIGN_OUT"
    }
}

export function makeSubmitOnSignInForm() {
    return {
        type: "MAKE_SUBMIT_ON_SIGN_In"
    }
}

export function handleChangingThePage() {
    return {
        type: "HANDLE_CHANGING_THE_PAGE"
    }
}
