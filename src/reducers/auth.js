import { AUTHENTICATE, SET_CURRENT_USER } from "./../actions/types";

const initialState = {
  isAuthenticated: false,
  currentUser: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: action.authenticated
      };

    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user
      };

    default:
      return state;
  }
};
