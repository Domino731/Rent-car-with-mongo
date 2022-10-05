import {RootState} from "../store";
import {ADD_NEW_CAR_REDUCER_NAME} from "./reducer";
import {createSelector} from "@reduxjs/toolkit";

const State = (state: RootState) => state[ADD_NEW_CAR_REDUCER_NAME];

/**
 * current add new car step
 * */
export const addNewCarCurrentStepSelector = createSelector(State, (state) => state.currentStep);

/**
 * array with completed steps
 * */
export const addNewCarCompletedStepsSelector = createSelector(State, (state) => state.completedSteps);