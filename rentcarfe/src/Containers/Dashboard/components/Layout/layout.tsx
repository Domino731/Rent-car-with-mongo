import {ReactNode} from "react";
import Input from "../../../../Components/Input";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
    return <div className="flex w-full h-full overflow-hidden">
        {/*filter & sort column*/}
        <div className="w-1/6 h-full  border-solid border-[1px] border-gray-300 drop-shadow-lg">

        </div>
        {/*cars & search*/}
        <div className="flex flex-col w-full h-full">
            {/*search*/}
            <div className="flex h-[80px] w-full h-full justify-center border-b-solid border-b-[1px] border-gray-300">
                <div className="w-1/2 h-full flex items-center justify-center">
                    <Input placeholder="Mercedes gle 450"/>
                </div>
            </div>
            <div className="w-full h-full bg-slate-200">
                {children}
            </div>

        </div>

    </div>
}