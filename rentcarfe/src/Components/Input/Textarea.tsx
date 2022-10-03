import {InputProps} from "./Input";
import classNames from "classnames";
import {FormikInputProps} from "./FormikInput";
import {useField} from "formik";

export const Textarea = ({
                             name,
                             value,
                             onChange,
                             label,
                             placeholder,
                             type,
                             errorMessage,
                             isError,
                             required
                         }: InputProps) => {
    const className = classNames(
        'border-solid border-2 border-gray-300 w-full rounded-md py-1 px-1',
        {
            'border-gray-300': !isError,
            'border-red-600': isError
        },
        'hover:border-sky-400',
        'focus:outline-none focus:border-sky-500 focus:bg-slate-100',
        'resize-none',
        'h-full'
    ); // => 'foo bar'

    return <>
        {label && <label className="block font-medium">
            {label}
            {required && <span className="text-red-500">*</span>}
        </label>}

        <textarea
            id="message"
            className={className}
            placeholder="Your message..."
        />
    </>
}

export const FormikTextarea = ({name, label, placeholder, type, required}: FormikInputProps) => {
    const [field, meta] = useField(name);
    return <Textarea
        value={field.value}
        onChange={field.onChange}
        name={field.name}
        label={label}
        type={type}
        placeholder={placeholder}
        isError={Boolean(meta.touched && meta.error)}
        errorMessage={meta.error}
        required={required}
    />
}