import {useEffect} from "react";

/** hook with which you can trigger any callback when user click outside specific element
 * @param ref - reference to element
 * @param handler - callback function
 * */
export const useOutsideClick = (ref: any, handler: (e: MouseEvent | TouchEvent) => void) => {
    useEffect(
        () => {
            const listener = (event: MouseEvent | TouchEvent) => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        [ref, handler]
    );
}