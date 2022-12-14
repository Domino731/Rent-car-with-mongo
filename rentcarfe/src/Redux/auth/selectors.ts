import {RootState} from "../store";
import {AUTH_REDUCER_NAME} from "./reducer";
import {createSelector} from "@reduxjs/toolkit";

const AuthState = (state: RootState) => state[AUTH_REDUCER_NAME];

// is user logged
export const authIsUserLoggedSelector = createSelector(AuthState, (state) => Boolean(state.user));

// LOADERS
// register loader
export const authRegisterLoaderSelector = createSelector(AuthState, (state) => state.registerLoader);
// login loader
export const authLoginLoaderSelector = createSelector(AuthState, (state) => state.loginLoader);