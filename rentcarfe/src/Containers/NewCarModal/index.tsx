import {useSelector} from "react-redux";
import {addNewCarCurrentStepSelector} from "../../Redux/AddNewCar/selectors";
import {ADD_NEW_CAR_STEPS, AddNewCarStepsUnion} from "../../Redux/AddNewCar/const";
import {CarBasicData} from "./CarBasicData";

const NewCarModal = () => {
    const addNewCarCurrentStep: AddNewCarStepsUnion = useSelector(addNewCarCurrentStepSelector);

    switch (addNewCarCurrentStep) {
        case ADD_NEW_CAR_STEPS.BASIC_DATA:
            return <CarBasicData/>
        default:
            return <div/>
    }
}

export default NewCarModal;