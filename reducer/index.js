const initialState = {
    onAuthStateChangedCalled: false,
    authorized: false,
    login: "",
    password: "",
    error: null,
    submit: false,
    currentUser: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case "CHECK_ON_AUTH_STATE_CHANGED": {
          return Object.assign({}, state, {
              onAuthStateChangedCalled: true,
              authorized: !!action.value
          })
      }
      case "CHANGE_USER_LOGIN": {
          return Object.assign({}, state, {
              login: action.value
          })
      }
      case "CHANGE_USER_PASSWORD": {
          return Object.assign({}, state, {
              password: action.value
          })
      }
      case "CATCH_ERROR": {
          return Object.assign({}, state, {
              error: action.value,
              login: "",
              password: ""
          })
      }
      case "MAKE_SUBMIT_ON_SIGN_UP": {
          return Object.assign({}, state, {
              submit: true,
              authorized: true,
              error: ""
          })
      }
      case "MAKE_SUBMIT_ON_SIGN_In": {
          return Object.assign({}, state, {
              submit: true,
              authorized: true,
              error: ""
          })
      }
      case "SET_CURRENT_USER": {
          return Object.assign({}, state, {
              currentUser: action.value
          })
      }
      case "HANDLE_SIGN_OUT": {
          return Object.assign({}, state, {
              onAuthStateChangedCalled: false,
              authorized: false,
              login: "",
              password: "",
              currentUser: "",
              submit: false

          })
      }
      default:
          return state;
  }
};

export default reducer;