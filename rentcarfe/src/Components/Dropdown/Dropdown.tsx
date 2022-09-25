import Input from "../Input";
import React, {useCallback, useState} from "react";

interface DropdownProps {
    name?: string;
    value?: string;
    label?: string;
    placeholder?: string;
    type?: string;
    isError?: boolean;
    errorMessage?: string;
    onChange: (value: string | number) => void;
    options: Array<{ label: string, value: string | number }>
}

interface ListItemProps {
    label: string;
    onClick: () => void;
}

const ListItem = ({label, onClick}: ListItemProps) => {
    return <li>
        <button
            className="
            pl-2 py-1 w-full
            text-left font-medium
            border-b-solid border-b-[1px] border-gray-300
            transition-all
            hover:bg-sky-500 hover:text-white
            ">{label}</button>
    </li>
}

export const Dropdown: React.FC<DropdownProps> = (
    {
        name,
        value,
        label,
        placeholder,
        errorMessage,
        isError,
        options,
        onChange
    }
) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const handleToggleIsExpanded = useCallback(() => setIsExpanded(prev => !prev), [])

    return <div className="relative">
        <div className="relative">
            <Input name={name} value={value} label={label} placeholder={placeholder} errorMessage={errorMessage}
                   isError={isError}/>
            <div className="absolute top-0 left-0 w-full h-full" onClick={handleToggleIsExpanded}/>
        </div>
        {isExpanded &&
            <ul className="absolute bg-white border-solid border-2 border-sky-500 w-full rounded-md py-2 dropdown-no-border">
                {options.map(el => <ListItem label={el.label} onClick={() => onChange(el.value)}/>)}
            </ul>
        }
    </div>
}