import {ChangeEventHandler, FunctionComponent} from "react";
import classNames from "classnames";

interface InputProps {
    name?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    label?: string;
    placeholder?: string;
    type?: string;
    isError?: boolean;
    errorMessage?: string;
}

export const Input: FunctionComponent<InputProps> = (
    {
        name,
        value,
        onChange,
        label,
        placeholder,
        type,
        errorMessage,
        isError
    }
) => {
    const inputClassName = classNames(
        'border-solid border-2 border-gray-300 w-full rounded-md py-1 px-1',
        {
            'border-gray-300': !isError,
            'border-red-600': isError
        }
    ); // => 'foo bar'

    return <div className="mb-3 w-full">
        {label && <label className="block font-medium">{label}</label>}
        <input
            className={inputClassName}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
        />
        {errorMessage && <p className="text-red-500 text-[14px]">{errorMessage}</p>}
    </div>
}