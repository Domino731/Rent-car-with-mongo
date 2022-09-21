import {useMemo} from "react";
import classNames from "classnames";
import imgSrc from '../../Assets/example_car.jpg'

/** card component with basic car info - image, year, hp, price */
export const CarCard = () => {
    const wrapperClassName = useMemo(() => classNames(''), []);

    return <div className="ml-4 mt-4 flex">
        <div
            className="w-[400px] drop-shadow-lg bg-white  border-solid border-[1px] border-gray-300 rounded-md overflow-hidden pb-3.5">
            {/*car image*/}
            <div className="max-h-[265px]  overflow-hidden">
                <img src={imgSrc} alt="Car" title="Car" className="w-full hover:scale-110 ease-in duration-500"/>
            </div>

            {/*car data*/}
            <div className="px-2 mt-2">
                <p className="text-xl font-medium">Ford mustang</p>
                <p className="text-base">2019 | 144 280km | Diesel | 300hp</p>
                <p className="text-2xl mt-2 text-green-500 border-b-solid border-b-[1px] border-b-gray-300">130/day</p>
                <p className="text-xl mt-1 text-sky-500">250 000</p>
            </div>
        </div>
    </div>
}