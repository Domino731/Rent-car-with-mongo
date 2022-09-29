import Divider from "../../Components/Divider";
import {Formik, FormikValues} from 'formik';
import {useCallback, useMemo, useRef} from "react";
import {useOutsideClick} from "../../Hooks/useOutsideClick";
import {FormikInput} from "../../Components/Input/FormikInput";
import {FormikCheckbox} from "../../Components/Checkbox";
import {NewCarInitialValues, NewCarValidationSchema} from "./const";
import {Button} from "../../Components/Button/Button";

const NewCarModal = () => {
    const ref = useRef(null);

    useOutsideClick(ref, (e) => console.log(e))

    // submit fnc for formik
    const handleSubmit = useCallback((formikValues: FormikValues) => {
        console.log(formikValues);
    }, [])

    return <div className="
    absolute top-0 left-0
    w-full h-full
    bg-sky-500
    modal-background
    flex justify-center items-center
    py-[100px]
    ">
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
                <form className="h-full flex flex-col">
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
                        <div className="flex w-1/3 mt-2">
                            <FormikInput name="type" label="Type" required/>
                        </div>
                        <div className="flex w-1/3 mt-2">
                            <FormikInput name="color" label="Color" required/>
                        </div>
                    </div>
                    <div className="flex w-full justify-end">
                        <div className="w-1/3">
                            <Button>Next</Button>
                        </div>
                    </div>
                </form>
            </Formik>
        </div>
    </div>
}

export default NewCarModal;