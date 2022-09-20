import {createAsyncThunk} from "@reduxjs/toolkit";
import {AUTH_ACTIONS} from "./const";
import {NewUser, UserLoginData} from "./types";
import {apiRequest} from "../../Api/methods";

/** REDUX thunk - register the user */
export const authRegister = createAsyncThunk(
    AUTH_ACTIONS.REGISTER,
    async (payload: NewUser) => {
        const {username, password, email, onSuccess, setErrors} = payload;
        const response = await apiRequest('POST', '/register', {username, password, email});

        // on success
        // @ts-ignore
        if (response.code === 201) {
            onSuccess();
            // @ts-ignore
        } else if (response.data.code === 400) {
            // todo: fix nested data
            const {data: {error: {key, message}}} = response;
            setErrors({[key]: message});
        }

        return response.data;
    }
);

/** REDUX thunk - login the user */
export const authLogin = createAsyncThunk(
    AUTH_ACTIONS.LOGIN,
    async (payload: UserLoginData) => {
        const {email, password, onSuccess, onError} = payload
        const response = await apiRequest('POST', '/login', {email, password});

        // on success
        // @ts-ignore
        if (response.code === 200) {
            onSuccess();
        } else {
            onError(response.data.message)
        }

        return response.data;
    }
);