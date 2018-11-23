export function checkOnAuthStateChanged(user) {
    return function (dispatch) {
        dispatch({type: "CHECK_ON_AUTH_STATE_CHANGED", value: user});
    }
}