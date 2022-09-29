import {ReactNode, useRef} from "react";
import {useOutsideClick} from "../../Hooks/useOutsideClick";
import {useDispatch} from "react-redux";
import {closeModal} from "../../Redux/modal/reducer";

const Modal = ({children}: { children: ReactNode }) => {
    const dispatch = useDispatch();
    const ref = useRef(null);

    useOutsideClick(ref, (e) => dispatch(closeModal));

    return <div className="
    absolute top-0 left-0
    w-full h-full
    bg-sky-500
    modal-background
    flex justify-center items-center
    py-[100px]
    ">
        <div className="modal-size-md bg-white rounded-md h-full drop-shadow-xl px-6 py-6 flex flex-col" ref={ref}>
            {children}
        </div>
    </div>
}

export default Modal;