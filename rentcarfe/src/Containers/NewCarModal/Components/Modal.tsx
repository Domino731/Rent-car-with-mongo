import {ReactNode, useRef} from "react";
import {useOutsideClick} from "../../../Hooks/useOutsideClick";
import {Formik, FormikProps, FormikValues} from "formik";
import Car from "../../../Assets/green_mustang.jpg";
import Divider from "../../../Components/Divider";

interface ModalProps {
    children: ReactNode | ((props: FormikProps<Record<string, any>>) => ReactNode);
    onSubmit: (formikValues: FormikValues) => void;
    validationSchema: any;
    initialValues: Record<string, any>
}

export const Modal = ({children, onSubmit, validationSchema, initialValues}: ModalProps) => {
    const ref = useRef(null);

    // TODO: close modal on focus change
    useOutsideClick(ref, (e: MouseEvent | TouchEvent) => console.log(e))

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
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {children}
            </Formik>
        </div>
    </div>
}