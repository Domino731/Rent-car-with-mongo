import {configureStore} from '@reduxjs/toolkit'
import {AUTH_REDUCER_NAME} from "./auth/reducer";
import authReducer from './auth/reducer';
import modalReducer from './modal/reducer';
import addNewCarReducer from './AddNewCar/reducer';
import {MODAL_REDUCER_NAME} from "./modal/reducer";
import {ADD_NEW_CAR_REDUCER_NAME} from "./AddNewCar/reducer";

/** redux store */
export const store = configureStore({
    reducer: {
        [AUTH_REDUCER_NAME]: authReducer,
        [MODAL_REDUCER_NAME]: modalReducer,
        [ADD_NEW_CAR_REDUCER_NAME]: addNewCarReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>