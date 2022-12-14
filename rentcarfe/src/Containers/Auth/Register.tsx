import {FunctionComponent, useCallback, useState} from "react";
import {Button} from "../../Components/Button/Button";
import {Formik, FormikValues} from 'formik';
import {AuthInitialValues, AuthValidationSchema} from "./utils";
import {AUTH_KEY} from "./types";
import {FormikInput} from "../../Components/Input/FormikInput";
import Car from '../../Assets/camaro.png'
import {useDispatch, useSelector} from "react-redux";
import {authRegister} from "../../Redux/auth/thunks";
import {AnyAction} from "@reduxjs/toolkit";
import {authRegisterLoaderSelector} from "../../Redux/auth/selectors";
import {useNavigate} from "react-router";
import {ROUTES} from "../../Routes";
import {FormikErrors} from "formik/dist/types";
import {Link} from "react-router-dom";

export const Register: FunctionComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const authRegisterLoader = useSelector(authRegisterLoaderSelector);

    const handleRegisterUser = useCallback((formikValues: FormikValues, setErrors: (errors: FormikErrors<any>) => void) => {
        const {username, email, password} = formikValues;
        const onSuccess = () => navigate(ROUTES.HOME);
        dispatch(authRegister({username, email, password, onSuccess, setErrors}) as unknown as AnyAction);
    }, [dispatch, navigate])

    return <div className="w-full h-full flex">
        {/*form*/}
        <div className="w-1/2  h-full flex items-center justify-center gradient-wiretap">
            <div className="w-[350px] bg-white rounded-md drop-shadow-2xl px-3.5 py-2">
                <h1 className="font-bold text-[40px] mb-[20px]">Register</h1>
                {/*@ts-ignore*/}
                <Formik
                    initialValues={AuthInitialValues[AUTH_KEY.REGISTER]}
                    validationSchema={AuthValidationSchema[AUTH_KEY.REGISTER]}
                    validateOnChange={false}
                >
                    {({values, setErrors}) => <form>
                        <FormikInput name="username" label="Username" placeholder="Adam123"/>
                        <FormikInput name="email" label="E-mail" placeholder="example@gmail.com"/>
                        <FormikInput name="password" label="Password" placeholder="************" type="password"/>
                        <div className="mt-10">
                            <Button type="submit" disabled={authRegisterLoader} onClick={e => {
                                e.preventDefault()
                                handleRegisterUser(values, setErrors)
                            }
                            }>Send</Button>
                        </div>
                    </form>}
                </Formik>
                <div className="text-center mt-3 hover:text-gray-400">
                    <Link to={ROUTES.LOGIN}>Already registered? log in</Link>
                </div>
            </div>
        </div>
        {/*car */}
        <div className="w-1/2  h-full relative overflow-hidden">
            <h1 className="font-extrabold tracking-[.04em] ml-[10px] text-[88px]">Mongo_car</h1>
            <span
                className="block w-full h-[80px] bg-[#8c2486] absolute bottom-[160px] right-[-500px] rotate-[130deg]"/>
            <span
                className="block w-full h-[260px] bg-[#8c2486] absolute bottom-[195px] right-[-290px] rotate-[130deg]"/>
            <img src={Car} alt="car" className="w-[870px] absolute right-[30px] bottom-[30px]"/>
        </div>
    </div>
}