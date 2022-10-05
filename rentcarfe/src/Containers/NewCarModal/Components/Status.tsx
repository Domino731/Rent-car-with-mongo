import {useCallback} from "react";
import classNames from "classnames";

export const Status = () => {
    const spanClassName = useCallback(() => classNames(), [])
    return <div className="flex h-full items-center">
        <span className="w-[14px] h-[14px] block rounded-[100px] bg-green-500 mr-2"/>
        <span className="w-[14px] h-[14px] block rounded-[100px] border-2 border-zinc-900 mr-2"/>
        <span className="w-[14px] h-[14px] block rounded-[100px] border-2 border-gray-400 mr-2"/>
        <span className="w-[14px] h-[14px] block rounded-[100px] border-2 border-gray-400 mr-2"/>
    </div>
}