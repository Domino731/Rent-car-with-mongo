import {FunctionComponent} from "react";
import {useField} from "formik";
import {Input} from "./Input";

interface FormikInputProps {
    name: string;
    label?: string;
    placeholder?: string;
    type?: string;
}

export const FormikInput: FunctionComponent<FormikInputProps> = ({name, label, placeholder, type}) => {
    const [field, meta, helpers] = useField(name);
    return <Input value={field.value} onChange={field.onChange} name={field.name} label={label} type={type}
                  placeholder={placeholder}/>
}