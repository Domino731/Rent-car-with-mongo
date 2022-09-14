import {createAsyncThunk} from "@reduxjs/toolkit";
import {AUTH_ACTIONS} from "./const";
import {NewUser} from "./types";

export const authRegister = createAsyncThunk(
    AUTH_ACTIONS.REGISTER,
    async (payload: NewUser, thunkAPI) => {
        // const {password, email, onSuccess} = payload;
        // const response = await apiRequest('POST', '/signup', {password, email});
        // if (response.status === 201) {
        //     onSuccess();
        // }
        // return response.data;
    }
)