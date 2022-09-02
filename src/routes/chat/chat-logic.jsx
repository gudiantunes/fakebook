import { useState } from "react";

const useChatLogic = (props) => {
    const checkUrl = (url) => {
        console.log('the url is ' + url)
        if (url.includes('user=')) {
            const email = url.slice(5);
            localStorage.setItem(`${props.clientName}-session`, email)
            console.log('have url')
            return [true, email];
        }
        const storedSession = localStorage.getItem(`${props.clientName}-session`)
        if (storedSession) {
            return [true, storedSession]
        }
        return [false, ''];
    }

    const [def, session] = checkUrl(props.param);

    const [isLogged, setIsLogged] = useState(def)

    setTimeout(() => { if (!isLogged) {
        props.navigate('/login');
    }}, 100);

    return {isLogged, session};
}
 
export default useChatLogic;