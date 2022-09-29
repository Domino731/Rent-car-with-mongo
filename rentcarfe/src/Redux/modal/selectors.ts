import {RootState} from "../store";
import {MODAL_REDUCER_NAME} from "./reducer";
import {createSelector} from "@reduxjs/toolkit";

const ModalState = (state: RootState) => state[MODAL_REDUCER_NAME];

export const currentModalSelector = createSelector(ModalState, (state) => state.currentModal);