import { SET_USER, LOGOUT_USER } from './actions/authActions';

const initialState = {
  email: null,
  userId: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        email: action.payload.email,
        userId: action.payload.userId
      };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
