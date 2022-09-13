import {FunctionComponent, ReactNode} from "react";

interface ButtonProps {
    children?: ReactNode;
}
export const Button : FunctionComponent<ButtonProps> = ({children}) => {
    return <button className="bg-red-600 w-full rounded-md py-3 text-white font-bold tracking-widest">{children}</button>
}