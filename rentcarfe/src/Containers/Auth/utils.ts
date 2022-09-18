import {AUTH_KEY} from "./types";
import * as Yup from 'yup';

// INITIAL VALUES FOR FORMIK

/**  register form initial values */
const RegisterInitialValues = {
    username: '',
    email: '',
    password: '',
    passwordRepeat: ''
}

/**  register form initial values */
const LoginInitialValues = {
    email: '',
    password: '',
}

// VALIDATION SCHEME FOR FORMIK

// register form validation schema for formik
const RegisterValidationSchema = Yup.object().shape(
    {
        username: Yup.string()
            .min(3, 'Should be 3 character long')
            .max(15, 'should not exceed 15 characters')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Should be 6 character long')
            .required('Required')
    }
);

// login form validation schema for formik
const LoginValidationSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        password: Yup.string()
            .required('Required')
    }
);

/** auth form initial values */
export const AuthInitialValues = {
    [AUTH_KEY.REGISTER]: RegisterInitialValues,
    [AUTH_KEY.LOGIN]: LoginInitialValues
}

/** auth form validation  */
export const AuthValidationSchema = {
    [AUTH_KEY.REGISTER]: RegisterValidationSchema,
    [AUTH_KEY.LOGIN]: LoginValidationSchema
}



