import {FunctionComponent} from "react";
import Input from "../../Components/Input";
import {Button} from "../../Components/Button/Button";
import {Formik} from 'formik';
import {AuthInitialValues, AuthValidationSchema} from "./utils";
import {AUTH_KEY} from "./types";
import {FormikInput} from "../../Components/Input/FormikInput";
import Car from '../../Assets/camaro.png'

export const Register: FunctionComponent = () => {
    return <div className="w-full h-full flex">
        {/*form*/}
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