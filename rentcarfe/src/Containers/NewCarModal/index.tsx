import Divider from "../../Components/Divider";
import Checkbox from "../../Components/Checkbox";

const NewCarModal = () => {
    return <div className="
    absolute top-0 left-0
    w-full h-full
    bg-sky-500
    modal-background
    flex justify-center items-center
    py-[100px]
    ">
        <div className="modal-size-md bg-white rounded-md h-full drop-shadow-xl px-6 py-6">
            {/*title*/}
            <header>
                <h1 className="text-[42px]">Add new car</h1>
                <Divider/>
                <Checkbox/>
            </header>
        </div>
    </div>
}

export default NewCarModal;