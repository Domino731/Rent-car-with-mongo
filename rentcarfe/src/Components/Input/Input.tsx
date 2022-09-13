import {ChangeEventHandler, FunctionComponent} from "react";

interface InputProps {
    name?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    label?: string;
    placeholder?: string;
    type?: string;
}

export const Input: FunctionComponent<InputProps> = ({name, value, onChange, label, placeholder, type}) => {
    return <div className="mb-3">
        {label && <label className="block font-medium">{label}</label>}
        <input
            className="border-solid border-2 border-gray-300 w-full rounded-md py-1 px-1"
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
        />
    </div>
}