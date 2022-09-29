import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {MODAL_NAMES, ModalNamesUnion} from "./types";

interface ModalState {
    currentModal: ModalNamesUnion | null;
}

export const MODAL_REDUCER_NAME = 'modal';

const initialState: ModalState = {currentModal: MODAL_NAMES.ADD_NEW_CAR}

const modalReducer = createSlice({
    name: MODAL_REDUCER_NAME,
    initialState,
    reducers: {
        openAddNewCareModal(state) {
            state.currentModal = MODAL_NAMES.ADD_NEW_CAR
        },
        closeModal(state) {
            state.currentModal = null;
        }
    },
})

export const {openAddNewCareModal, closeModal} = modalReducer.actions
export default modalReducer.reducer