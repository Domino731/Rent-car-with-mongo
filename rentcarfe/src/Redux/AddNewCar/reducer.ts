import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {ADD_NEW_CAR_STEPS, AddNewCarStepsUnion} from "./const";

interface AddNewCarState {
    currentStep: AddNewCarStepsUnion;
    completedSteps: Array<AddNewCarStepsUnion>
}

const initialState: AddNewCarState = {
    currentStep: ADD_NEW_CAR_STEPS.BASIC_DATA,
    completedSteps: []
}

export const ADD_NEW_CAR_REDUCER_NAME = 'AddNewCar'

const AddNewCarSlice = createSlice({
    name: ADD_NEW_CAR_REDUCER_NAME,
    initialState,
    reducers: {
        changeCurrentStep(state, action: PayloadAction<AddNewCarStepsUnion>) {
            state.currentStep = action.payload;
        },
    },
})

export const {changeCurrentStep} = AddNewCarSlice.actions
export default AddNewCarSlice.reducer