// Action Types
export const SET_USER = 'SET_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

// Action Creators
export const setUser = (email, userId) => ({
  type: SET_USER,
  payload: { email, userId }
});

export const logoutUser = () => ({
  type: LOGOUT_USER
});
