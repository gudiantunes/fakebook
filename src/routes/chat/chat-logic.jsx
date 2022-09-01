import { useState } from "react";

const useChatLogic = (props) => {
    const checkUrl = (url) => {
        if (url.includes('user=')) {
            return true;
        }
        return false;
    }

    const [isLogged, setIsLogged] = useState(checkUrl(props.param))

    setTimeout(() => { if (!isLogged) {
        props.navigate('/login');
    }}, 100);

    return {isLogged};
}
 
export default useChatLogic;