/** This hook allows to iterate through any arrays.
 * When user uses 'prev' or 'next', state will rerender */
import React, {useCallback, useMemo, useState} from "react";
export const useIterator = (
    items = [],
    initialIndex = 0
) => {
    const [i,setIndex] = useState(initialIndex);

    /** useCallback - to ensure that functions always be the same until i changes*/
    const prev = useCallback(()=> {
        // for loop
        if (i === 0) return setIndex(items.length - 1);
        setIndex(i - 1);
    },[i]);
    const next =  useCallback(()=> {
        // for loop
        if (i === items.length-1) return setIndex(0);
        setIndex(i + 1);
    },[i]);
    /** useMemo - just like useCallback for objects instead of functions*/
    const item = useMemo(()=>items[i],[i]);
    return [item || items[0],prev,next]
}