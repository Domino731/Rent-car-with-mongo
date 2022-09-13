import {FunctionComponent, MouseEventHandler, ReactNode} from "react";

interface ButtonProps {
    children?: ReactNode;
    type?: "button" | "submit" | "reset"
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FunctionComponent<ButtonProps> = ({children, type, onClick}) => {
    return <button
        type={type}
        className="bg-red-600 w-full rounded-md py-3 text-white font-bold tracking-widest"
        onClick={onClick}
    >{children}</button>
}