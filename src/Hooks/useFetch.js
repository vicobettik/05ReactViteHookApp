import { useEffect } from "react";

export const useFetch = (url) => {
    
    const getFectch = async () => {
        const urlFetch = url;
        console.log(urlFetch);
        const options = {mode: 'cors'};

        const resp = await fetch(url, options)
        console.log(resp)
        const data = await resp.json();
        
        console.log(data);
    }

    useEffect(() => {
        getFectch();
    }, [url]);


  return{};
}
