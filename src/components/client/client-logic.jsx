import { useEffect, useState } from "react";

const useClientLogic = (props) => {
    const [clientUrl, setClientUrl] = useState('/')
    useEffect(()=>{console.log(`redirect to url ${clientUrl}`)}, [clientUrl]);
    return {clientUrl, setClientUrl};
}
 
export default useClientLogic;