import {useSelector} from "react-redux";
import {currentModalSelector} from "../../Redux/modal/selectors";
import {MODAL_NAMES} from "../../Redux/modal/types";
import NewCarModal from "../NewCarModal";
import React from "react";

const ModalManagement = () => {
    const currentModal = useSelector(currentModalSelector);

    switch (currentModal) {
        case MODAL_NAMES.ADD_NEW_CAR:
            return <NewCarModal/>
        default:
            return null;
    }
}

export default ModalManagement;