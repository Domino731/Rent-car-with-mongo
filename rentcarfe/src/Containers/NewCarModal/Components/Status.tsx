import {useCallback, useMemo} from "react";
import classNames from "classnames";
import {useSelector} from "react-redux";
import {addNewCarCompletedStepsSelector, addNewCarCurrentStepSelector} from "../../../Redux/AddNewCar/selectors";
import {ADD_NEW_CAR_STEPS, AddNewCarStepsUnion} from "../../../Redux/AddNewCar/const";

/**
 * Container with dots & current step name
 * */
export const Status = () => {
    const addNewCarCurrentStep = useSelector(addNewCarCurrentStepSelector);
    const addNewCarCompletedSteps = useSelector(addNewCarCompletedStepsSelector);

    // class name for span element (circle decoration)
    const spanClassName = useCallback((step: AddNewCarStepsUnion) => classNames(
        'w-[14px] h-[14px] block rounded-[100px] mr-2',
        {
            'border-2 border-zinc-900': addNewCarCurrentStep === step,
            'border-2 border-gray-400': addNewCarCurrentStep !== step && !addNewCarCompletedSteps.includes(step),
            'bg-green-500': addNewCarCompletedSteps.includes(step),
        }
    ), [addNewCarCompletedSteps, addNewCarCurrentStep]);

    const stepName = useMemo(() => {
        switch (addNewCarCurrentStep) {
            case ADD_NEW_CAR_STEPS.BASIC_DATA:
                return 'Basic data';
            case ADD_NEW_CAR_STEPS.EQUIPMENT_AND_IMAGES:
                return 'Equipment and images';
            case ADD_NEW_CAR_STEPS.SUMMARY:
                return 'Summary';
            default:
                return '';
        }
    }, [addNewCarCurrentStep])

    return <div className="flex h-full items-center">
        <span className={spanClassName(ADD_NEW_CAR_STEPS.BASIC_DATA)} title="basic data"/>
        <span className={spanClassName(ADD_NEW_CAR_STEPS.EQUIPMENT_AND_IMAGES)} title="Equipment and images"/>
        <span className={spanClassName(ADD_NEW_CAR_STEPS.SUMMARY)} title="Summary"/>
        <strong className="font-medium text-lg">
            {stepName}
        </strong>
    </div>
}