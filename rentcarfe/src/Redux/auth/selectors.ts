import {RootState} from "../store";
import {AUTH_REDUCER_NAME} from "./reducer";
import {createSelector} from "@reduxjs/toolkit";

const AuthState = (state: RootState) => state[AUTH_REDUCER_NAME];

// loaders
export const authRegisterLoaderSelector = createSelector(AuthState, (state) => state.registerLoader);