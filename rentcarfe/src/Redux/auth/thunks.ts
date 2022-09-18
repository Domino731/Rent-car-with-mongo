import {createAsyncThunk} from "@reduxjs/toolkit";
import {AUTH_ACTIONS} from "./const";
import {NewUser, UserLoginData} from "./types";
import {apiRequest} from "../../Api/methods";

/** REDUX thunk - register the user */
export const authRegister = createAsyncThunk(
    AUTH_ACTIONS.REGISTER,
    async (payload: NewUser) => {
        const response = await apiRequest('POST', '/register', payload);
        return response.data;
    }
);

/** REDUX thunk - login the user */
export const authLogin = createAsyncThunk(
    AUTH_ACTIONS.LOGIN,
    async (payload: UserLoginData) => {
        const response = await apiRequest('POST', '/login', payload);
        return response.data;
    }
);