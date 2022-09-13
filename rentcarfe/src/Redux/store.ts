import { configureStore } from '@reduxjs/toolkit'
import {AUTH_REDUCER_NAME} from "./auth/reducer";
import authReducer from './auth/reducer';

/** redux store */
export const store = configureStore({
   reducer: {
    [AUTH_REDUCER_NAME]: authReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>