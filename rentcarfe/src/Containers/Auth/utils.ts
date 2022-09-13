import {AUTH_KEY} from "./types";
import * as Yup from 'yup';

const RegisterInitialValues = {
    username: '',
    email: '',
    password: '',
    passwordRepeat: ''
}

const RegisterValidationSchema = Yup.object().shape(
    {
        username: Yup.string()
            .min(3, 'Should be 3 character long')
            .max(15, 'should not exceed 15 characters')
            .required('Required'),
        email: Yup.string()
            .email('invalid email address')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Should be 6 character long')
            .required('Required'),
        passwordRepeat: Yup.string()
            .min(6, 'Should be 6 character long')
            .required('Required'),
    }
);

export const AuthInitialValues = {
    [AUTH_KEY.REGISTER]: RegisterInitialValues
}

export const AuthValidationSchema = {
    [AUTH_KEY.REGISTER]: RegisterValidationSchema
}



