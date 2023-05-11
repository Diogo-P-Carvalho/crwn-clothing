import { createSlice } from "@reduxjs/toolkit";

// import { USER_ACTION_TYPES } from "./user.types";

// const INITIAL_STATE = {
//   currentUser: null,
//   isLoading: false,
//   error: null,
// };

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    checkUserSession(state) {
      state.isLoading = true;
    },
    googleSignInStart(state) {
      state.isLoading = true;
    },
    emailSignInStart(state, action) {
      state.isLoading = true;
    },
    signInSuccess(state, action) {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    signInFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    signOutStart(state) {
      state.isLoading = true;
    },
    signOutSuccess(state) {
      state.isLoading = false;
      state.currentUser = null;
    },
  },
});

export const {
  checkUserSession,
  googleSignInStart,
  emailSignInStart,
  signInSuccess,
  signInFailed,
} = userSlice.actions;

export const userReducer = userSlice.reducer;

// export const userReducerOld = (state = INITIAL_STATE, action = {}) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
//       return {
//         ...state,
//         currentUser: payload,
//       };

//     case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
//       return {
//         ...state,
//         currentUser: null,
//       };

//     case USER_ACTION_TYPES.SIGN_IN_FAILED:
//     case USER_ACTION_TYPES.SIGN_OUT_FAILED:
//     case USER_ACTION_TYPES.SIGN_UP_FAILED:
//       return {
//         ...state,
//         error: payload,
//       };

//     default:
//       return state;
//   }
// };
