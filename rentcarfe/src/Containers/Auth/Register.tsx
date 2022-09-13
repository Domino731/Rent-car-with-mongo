import {FunctionComponent} from "react";
import Input from "../../Components/Input";
import {Button} from "../../Components/Button/Button";

export const Register : FunctionComponent = () => {
    return <div className="w-full h-full">
        <div className="w-1/2  h-full flex items-center justify-center gradient-wiretap">
            <div className="w-[350px] bg-white rounded-md drop-shadow-2xl px-3.5 py-2">
                 <h1 className="font-bold text-[40px] mb-[20px]">Register</h1>
                 <Input label="Username" placeholder="Adam123"/>
                 <Input label="E-mail" placeholder="example@gmail.com"/>
                 <Input label="Password" placeholder="************" type="password"/>
                 <Input label="Repeat password" placeholder="************" type="password"/>
                  <div className="mt-10">
                     <Button>Send</Button>
                  </div>
            </div>
        </div>
    </div>
}