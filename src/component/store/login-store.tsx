import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  modalOpened: false,
  isLoginMode: true,
};

const loginSlice = createSlice({
  name: "loginReducer",
  initialState: initialAuthState,
  reducers: {
    loggedIn: (state) => {
      state.isAuthenticated = true;
    },
    loggedOut: (state) => {
      state.isAuthenticated = false;
    },
    modalOpen: (state) => {
      state.modalOpened = true;
    },
    modalClose: (state) => {
      state.modalOpened = false;
    },
    changeMode: (state) => {
      state.isLoginMode = !state.isLoginMode
    }
  },
});

export const { loggedIn, loggedOut, modalClose, modalOpen, changeMode } =
  loginSlice.actions;
export default loginSlice;
