const initialState = {
    onAuthStateChangedCalled: false,
    authorized: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case "CHECK_ON_AUTH_STATE_CHANGED": {
          return Object.assign({}, state, {
              onAuthStateChangedCalled: true,
              authorized: !!action.value
          })
      }
      default:
          return state;
  }
};

export default reducer;