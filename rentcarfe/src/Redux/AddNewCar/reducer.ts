import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {ADD_NEW_CAR_STEPS, AddNewCarStepsUnion} from "./const";

interface AddNewCarState {
    currentStep: AddNewCarStepsUnion;
    completedSteps: Array<AddNewCarStepsUnion>;
    basicData: Record<string, any>
}

const initialState: AddNewCarState = {
    // current add new car step
    currentStep: ADD_NEW_CAR_STEPS.BASIC_DATA,
    // array with completed steps
    completedSteps: [],
    // basic data about car
    basicData: {}
}

export const ADD_NEW_CAR_REDUCER_NAME = 'AddNewCar'

const AddNewCarSlice = createSlice({
    name: ADD_NEW_CAR_REDUCER_NAME,
    initialState,
    reducers: {
        setCurrentStep(state, action: PayloadAction<AddNewCarStepsUnion>) {
            state.currentStep = action.payload;
        },
        setCarBasicData(state, action: PayloadAction<Record<string, any>>) {
            state.basicData = action.payload;
        },
    },
})

export const {setCurrentStep, setCarBasicData} = AddNewCarSlice.actions
export default AddNewCarSlice.reducer