import Divider from "../../Components/Divider";
import {Formik, FormikValues} from 'formik';
import {useCallback, useRef} from "react";
import {useOutsideClick} from "../../Hooks/useOutsideClick";
import {FormikInput} from "../../Components/Input/FormikInput";
import {FormikCheckbox} from "../../Components/Checkbox";
import {NewCarInitialValues, NewCarValidationSchema} from "./const";
import {Button} from "../../Components/Button/Button";
import {FormikTextarea} from "../../Components/Input/Textarea";
import Car from '../../Assets/green_mustang.jpg'
import {Status} from "./Components/Status";

export const CarEquipmentAndImages = () => {
    const ref = useRef(null);

    useOutsideClick(ref, (e) => console.log(e))

    // submit fnc for formik
    const handleSubmit = useCallback((formikValues: FormikValues) => {
        console.log(formikValues);
    }, [])

    //
    return <div className="
    absolute top-0 left-0
    w-full h-full
    bg-sky-500
    modal-background
    flex justify-center items-center
    py-[100px]
    ">
        <div className="rounded-md h-[1097px] overflow-hidden relative right-[-10px]">
            <img src={Car} alt="car" className="h-full"/>
        </div>
        <div className="modal-size-md bg-white rounded-md h-full drop-shadow-xl px-6 py-6 flex flex-col" ref={ref}>

            {/*title*/}
            <header>
                <h2 className="text-[42px]">Add new car</h2>
                <Divider/>
            </header>
            <Formik
                initialValues={NewCarInitialValues}
                onSubmit={handleSubmit}
                validationSchema={NewCarValidationSchema}
            >
                {({handleSubmit}) => <form className="h-full flex flex-col">
                    <div className="flex w-full justify-between">
                        <Status/>
                        <div className="w-1/3">
                            <Button onClick={() => handleSubmit()}>Next</Button>
                        </div>
                    </div>
                </form>}
            </Formik>
        </div>
    </div>
}