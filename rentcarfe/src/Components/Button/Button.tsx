import {FunctionComponent, MouseEventHandler, ReactNode, useMemo} from "react";
import classNames from "classnames";

interface ButtonProps {
    children?: ReactNode;
    type?: "button" | "submit" | "reset"
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

export const Button: FunctionComponent<ButtonProps> = ({children, type, onClick, disabled}) => {
    const buttonClassName = useMemo(() => classNames('bg-sky-500 w-full rounded-md py-3 px-3 text-white font-bold tracking-widest', {
        'opacity-70': disabled
    }), [disabled]);
    return <button
        type={type}
        className={buttonClassName}
        onClick={(e) => {
            e.preventDefault();
            if (!disabled && onClick) {
                onClick(e);
            }
        }}
        disabled={disabled}
    >{children}</button>
}