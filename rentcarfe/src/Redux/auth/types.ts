import {FormikErrors} from "formik/dist/types";

export interface NewUser {
    password: string;
    username: string;
    email: string;
    onSuccess: () => void;
    setErrors: (errors: FormikErrors<any>) => void
}

export interface UserLoginData {
    password: string;
    email: string;
    onSuccess: () => void;
    onError: (message: string) => void;
}

export interface User {
    username: string;
    id: string;
}