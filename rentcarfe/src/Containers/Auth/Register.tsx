import {FunctionComponent} from "react";
import Input from "../../Components/Input";
import {Button} from "../../Components/Button/Button";
import {Formik} from 'formik';
import {AuthInitialValues, AuthValidationSchema} from "./utils";
import {AUTH_KEY} from "./types";
import {FormikInput} from "../../Components/Input/FormikInput";

export const Register: FunctionComponent = () => {
    return <div className="w-full h-full">
        <div className="w-1/2  h-full flex items-center justify-center gradient-wiretap">
            <div className="w-[350px] bg-white rounded-md drop-shadow-2xl px-3.5 py-2">
                <h1 className="font-bold text-[40px] mb-[20px]">Register</h1>
                <Formik
                    initialValues={AuthInitialValues[AUTH_KEY.REGISTER]}
                    validationSchema={AuthValidationSchema[AUTH_KEY.REGISTER]}
                    onSubmit={(v) => console.log(v)}>
                    {({handleSubmit}) => <form>
                        <FormikInput name="username" label="Username" placeholder="Adam123"/>
                        <FormikInput name="email" label="E-mail" placeholder="example@gmail.com"/>
                        <FormikInput name="password" label="Password" placeholder="************" type="password"/>
                        <FormikInput name="passwordRepeat" label="Repeat password" placeholder="************"
                                     type="password"/>
                        <div className="mt-10">
                            <Button type="submit" onClick={e => {
                                e.preventDefault()
                                handleSubmit()
                            }
                            }>Send</Button>
                        </div>
                    </form>}
                </Formik>

            </div>
        </div>
    </div>
}