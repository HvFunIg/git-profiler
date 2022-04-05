/** Custom hook. It invokes every time the value for uri changes
 It is used for fetching requests */

import {useEffect, useState} from "react";

export function useFetch(uri){
    const [data,setData] = useState();
    const [error,setError] = useState();
    const [loading,setLoading] = useState(true);

    useEffect(()=> {
        //for data saving on changes
        if (!uri) return;
        fetch(uri)
            .then(data => data.json())
            .then(setData)
            .then(()=>setLoading(false))
            .catch(setError);
    },[uri]);

    return {
        loading,
        data,
        error
    }
}
