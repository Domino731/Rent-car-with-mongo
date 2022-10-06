import {FormikValues} from 'formik';
import {useCallback, useRef} from "react";
import {useOutsideClick} from "../../Hooks/useOutsideClick";
import {FormikInput} from "../../Components/Input/FormikInput";
import {FormikCheckbox} from "../../Components/Checkbox";
import {NewCarInitialValues, NewCarValidationSchema} from "./const";
import {Button} from "../../Components/Button/Button";
import {FormikTextarea} from "../../Components/Input/Textarea";
import {Status} from "./Components/Status";
import {Modal} from "./Components/Modal";

export const CarBasicData = () => {
    const ref = useRef(null);

    useOutsideClick(ref, (e) => console.log(e))

    // submit fnc for formik
    const handleSubmit = useCallback((formikValues: FormikValues) => {
        console.log(formikValues);
    }, [])

    //
    return <Modal onSubmit={handleSubmit} validationSchema={NewCarValidationSchema} initialValues={NewCarInitialValues}>
        {({handleSubmit}) => <form className="h-full flex flex-col">
            <div className="flex-grow">
                <div className="flex gap-[70px] mt-2">
                    <FormikCheckbox name="imported" label="Imported"/>
                    <FormikCheckbox name="damaged" label="Damaged"/>
                    <FormikCheckbox name="rightHand" label="Right-Hand"/>
                </div>
                <div className="w-1/2 mt-10">
                    <FormikInput name="VIN" label="VIN" placeholder="XXXXXXXXXXXXXX" required/>
                </div>
                <div className="flex gap-3 mt-14">
                    <FormikInput name="productionYear" label="Production year" placeholder="20.10.12" required/>
                    <FormikInput name="brand" label="Brand" placeholder="toyota" required/>
                    <FormikInput name="model" label="Model" placeholder="x-cr" required/>
                </div>
                <div className="flex gap-3 mt-2">
                    <FormikInput name="fuelType" label="Fuel type" placeholder="electric" required/>
                    <FormikInput name="power" label="Power (hp)" placeholder="120hp" required/>
                    <FormikInput name="engineSize" label="Engine size" placeholder="x-cr" required/>
                </div>

                <div className="flex gap-3 mt-2">
                    <FormikInput name="doorsAmount" label="Doors amount" placeholder="4" required/>
                    <FormikInput name="gearbox" label="Gearbox" placeholder="Manual" required/>
                    <FormikInput name="gearboxVersion" label="Version" placeholder="" required/>
                    <FormikInput name="generation" label="Generation" placeholder="" required/>
                </div>

                <div className="flex w-1/3 mt-2">
                    <FormikInput name="mileage" label="Mileage" required/>
                </div>

                <div className=" mt-2 w-full">
                    <label className="block font-medium text-xl block">Title</label>
                    <input
                        name="title"
                        type="text"
                        required
                        className="border-b-solid border-b-2 border-gray-300 w-full py-2 px-1 w-full"/>
                </div>
                <div className="flex mt-2">
                    <div className="w-1/3">
                        <div className="flex w-full">
                            <FormikInput name="type" label="Type" required/>
                        </div>
                        <div className="flex w-full mt-2">
                            <FormikInput name="color" label="Color" required/>
                        </div>
                    </div>
                    <div className="w-2/3 h-[275px] ml-[0.75rem]">
                        <FormikTextarea label="Description" name="description" required/>
                    </div>
                </div>

            </div>
            <div className="flex w-full justify-between">
                <Status/>
                <div className="w-1/3">
                    <Button onClick={() => handleSubmit()}>Next</Button>
                </div>
            </div>
        </form>}
    </Modal>
}
