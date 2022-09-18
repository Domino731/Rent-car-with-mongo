import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {authLogin, authRegister} from "./thunks";
import {User} from "./types";

export interface CounterState {
    value: number;
    registerLoader: boolean;
    loginLoader: boolean;
    user: User | null;
}

const initialState: CounterState = {
    value: 0,
    registerLoader: false,
    loginLoader: false,
    user: null
}

export const AUTH_REDUCER_NAME = 'auth'

export const auth = createSlice({
    name: AUTH_REDUCER_NAME,
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    }, extraReducers: (builder) => builder
        // register user
        .addCase(authRegister.fulfilled, (state, action) => {
            state.user = action.payload;
            state.registerLoader = false;
        }).addCase(authRegister.pending, (state) => {
            state.registerLoader = true;
        }).addCase(authRegister.rejected, (state) => {
            state.registerLoader = false;
            state.user = null;
        })
        // login user
        .addCase(authLogin.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loginLoader = false;
        }).addCase(authLogin.pending, (state) => {
            state.loginLoader = true;
        }).addCase(authLogin.rejected, (state) => {
            state.loginLoader = false;
            state.user = null;
        })
})

// Action creators are generated for each case reducer function
export const {decrement} = auth.actions

export default auth.reducer