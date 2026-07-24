import { useEffect, useState } from "react";
import { useLoading } from "../context/LoadingContext";

const useFetch = (url) => {
	const { loading, setLoading } = useLoading();
    const [data,setData]    = useState(null); 
    const [error,setError]  = useState("");

    useEffect(()=>{   
		setLoading(true); 
        fetch(url)
        .then(res=>res.json())
        .then(result=>{
            setData(result);
            setLoading(false);
        }).catch(err=>{
            setError(err.message);
            setLoading(false);
        }); 
    },[url]);

    return {data,loading,error}; 
}

export default useFetch;