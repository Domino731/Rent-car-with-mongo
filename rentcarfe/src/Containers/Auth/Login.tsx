import {FunctionComponent, useCallback, useState} from "react";
import {Button} from "../../Components/Button/Button";
import {Formik, FormikValues} from 'formik';
import {AuthInitialValues, AuthValidationSchema} from "./utils";
import {AUTH_KEY} from "./types";
import {FormikInput} from "../../Components/Input/FormikInput";
import Car from '../../Assets/camaro.png'
import {useDispatch, useSelector} from "react-redux";
import {authLogin} from "../../Redux/auth/thunks";
import {AnyAction} from "@reduxjs/toolkit";
import {authLoginLoaderSelector} from "../../Redux/auth/selectors";
import {useNavigate} from "react-router";
import {ROUTES} from "../../Routes";
import {Link} from "react-router-dom";

export const Login: FunctionComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const authLoginLoader = useSelector(authLoginLoaderSelector);

    const [error, setError] = useState<string>('');

    const handleRegisterUser = useCallback((formikValues: FormikValues) => {
        const {email, password} = formikValues;
        const onSuccess = () => navigate(ROUTES.HOME);

        dispatch(authLogin({email, password, onSuccess, setError}) as unknown as AnyAction);
    }, [dispatch, navigate])

    // TODO: form automation - login, register, password recovery
    return <div className="w-full h-full flex">
        {/*form*/}
        <div className="w-1/2  h-full flex items-center justify-center gradient-wiretap">
            <div className="w-[350px] bg-white rounded-md drop-shadow-2xl px-3.5 py-2">
                <h1 className="font-bold text-[40px] mb-[20px]">Login</h1>
                <Formik
                    initialValues={AuthInitialValues[AUTH_KEY.REGISTER]}
                    validationSchema={AuthValidationSchema[AUTH_KEY.REGISTER]}
                    onSubmit={handleRegisterUser}
                    validateOnChange={false}
                >
                    {({handleSubmit}) => <form>
                        <FormikInput name="email" label="E-mail" placeholder="your e-mail"/>
                        <FormikInput name="password" label="Password" placeholder="************" type="password"/>
                        {error && <p className="text-red-500 text-[14px] text-center">{error}</p>}
                        <div className="mt-10">
                            <Button type="submit" disabled={authLoginLoader} onClick={e => {
                                e.preventDefault()
                                handleSubmit()
                            }
                            }>Send</Button>
                        </div>
                    </form>}
                </Formik>
                <div className="text-center mt-3 hover:text-gray-400">
                    <Link to={ROUTES.REGISTER}>Don't have an account yet? Create free account</Link>
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