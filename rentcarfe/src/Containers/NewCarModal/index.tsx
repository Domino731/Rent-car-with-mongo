import Divider from "../../Components/Divider";
import {Formik, FormikValues} from 'formik';
import {useCallback, useMemo, useRef} from "react";
import {useOutsideClick} from "../../Hooks/useOutsideClick";

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
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <form>
                    {/*title*/}
                    <header>
                        <h1 className="text-[42px]">Add new car</h1>
                        <Divider/>
                    </header>
                </form>
            </Formik>
        </div>
    </div>
}

export default NewCarModal;