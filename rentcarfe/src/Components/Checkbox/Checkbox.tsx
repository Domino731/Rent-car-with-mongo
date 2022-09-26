import {FunctionComponent} from "react";

interface CheckboxProps {
    checked?: boolean;
    name?: string;
    value?: string;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({checked, name, value}) => {
    return <div className="flex items-center">
        <input checked={checked}
               id="checked-checkbox"
               type="checkbox"
               value={value}
               name={name}
               className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked
            state</label>
    </div>
}