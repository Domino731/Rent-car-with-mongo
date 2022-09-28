import {ChangeEventHandler, FunctionComponent} from "react";
import {useField} from "formik";

interface CheckboxProps {
    checked?: boolean;
    name?: string;
    value?: string;
    label?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({checked, name, value, label, onChange}) => {
    return <div className="flex items-center">
        <input checked={checked}
               id="checked-checkbox"
               type="checkbox"
               value={value}
               name={name}
               onChange={onChange}
               className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        {label && <label htmlFor="checked-checkbox"
                         className="ml-2 text-sm font-medium text-[15px]">{label}</label>}
    </div>
}

interface FormikCheckboxProps {
    label?: string;
    name: string;
}

export const FormikCheckbox: FunctionComponent<FormikCheckboxProps> = ({label, name}) => {
    const [field] = useField(name);
    return <Checkbox onChange={field.onChange} value={field.value} checked={field.value} label={label}/>
}