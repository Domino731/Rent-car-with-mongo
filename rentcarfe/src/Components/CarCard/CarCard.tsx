import {useMemo} from "react";
import classNames from "classnames";

export const CarCard = () => {
    const wrapperClassName = useMemo(() => classNames(''), []);

    return <div className="ml-4 mt-4 flex">
        <div className="drop-shadow-lg bg-white  border-solid border-[1px] border-gray-300 px-2">
            <p className="text-xl font-medium">Ford mustang</p>
            <p className="text-base">2019 | 144 280km | Diesel | 300hp</p>
            <p className="text-2xl mt-2 text-green-500 border-b-solid border-b-[1px] border-b-gray-300">250 000</p>
            <p className="text-xl mt-1 text-sky-500">250 000</p>
        </div>
    </div>
}