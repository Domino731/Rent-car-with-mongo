import Divider from "../../Components/Divider";
import {Formik, FormikValues} from 'formik';
import {useCallback, useMemo, useRef} from "react";
import {useOutsideClick} from "../../Hooks/useOutsideClick";
import {FormikInput} from "../../Components/Input/FormikInput";

const NewCarModal = () => {
    const ref = useRef(null);

    useOutsideClick(ref, (e) => console.log(e))

    // initial values for formik
    const initialValues = useMemo(() => ({
        // car status
        imported: false,
        damaged: false,
        rightHand: false,
        // specs
        year: null,
        brand: null,
        model: null,
        hp: null,
        fuel: null,
        engineSize: null,
        doorsAmount: null,
        gearbox: null,
        version: null,
        mileage: null,
        title: null,
        type: null,
        color: null
    }), []);

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
        <div className="modal-size-md bg-white rounded-md h-full drop-shadow-xl px-6 py-6" ref={ref}>
            {/*title*/}
            <header>
                <h2 className="text-[42px]">Add new car</h2>
                <Divider/>
            </header>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <form>
                    <div className="w-1/2 mt-10">
                        <FormikInput name="VIN" label="VIN" placeholder="XXXXXXXXXXXXXX" required/>
                    </div>
                    <div className="flex gap-3 mt-14">
                        <FormikInput name="productionYear" label="Production year" placeholder="20.10.12" required/>
                        <FormikInput name="brand" label="Brand" placeholder="toyota" required/>
                        <FormikInput name="model" label="Model" placeholder="x-cr" required/>
                    </div>
                    <div className="flex gap-3 mt-6">
                        <FormikInput name="fuelType" label="Fuel type" placeholder="electric" required/>
                        <FormikInput name="power" label="Power (hp)" placeholder="120hp" required/>
                        <FormikInput name="engineSize" label="Engine size" placeholder="x-cr" required/>
                    </div>

                    <div className="flex gap-3 mt-6">
                        <FormikInput name="doorsAmount" label="Doors amount" placeholder="4" required/>
                        <FormikInput name="gearbox" label="Gearbox" placeholder="Manual" required/>
                        <FormikInput name="gearboxVersion" label="Version" placeholder="" required/>
                        <FormikInput name="generation" label="Generation" placeholder="" required/>
                    </div>

                    <div className="flex w-1/3 mt-6">
                        <FormikInput name="mileage" label="Mileage" required/>
                    </div>

                    <div className=" mt-6 w-full">
                        <label className="block font-medium text-xl block">Title</label>
                        <input
                            name="title"
                            type="text"
                            required
                            className="border-b-solid border-b-2 border-gray-300 w-full py-2 px-1 w-full"/>
                    </div>
                    <div className="flex w-1/3 mt-6">
                        <FormikInput name="type" label="Type" required/>
                    </div>
                    <div className="flex w-1/3 mt-6">
                        <FormikInput name="color" label="Color" required/>
                    </div>
                </form>
            </Formik>
        </div>
    </div>
}

export default NewCarModal;