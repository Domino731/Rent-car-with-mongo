import {FunctionComponent, useMemo} from "react";
import {useField} from "formik";
import {Input} from "./Input";

export interface FormikInputProps {
    name: string;
    label?: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
}

/** Formik input component */
export const FormikInput: FunctionComponent<FormikInputProps> = ({name, label, placeholder, type, required}) => {
    const [field, meta] = useField(name);

    return <Input value={field.value}
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