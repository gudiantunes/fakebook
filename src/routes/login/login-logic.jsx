import { useState } from "react";

const useLoginLogic = ({mode, props}) => {
    const [loginMode, setLoginMode] = useState(mode);
    const tryLogin = (event) => {
        event.preventDefault();
        
        const emails = Object.keys(props.usersData);
        const email = event.target.querySelector('.email').value;

        if (emails.includes(email)) {
            props.navigate(`/?user=${email}`)
        } else {
            console.log('not-login');
        }
    }

    const tryRegister = () => {
        return 'a'
    }

    return {loginMode, setLoginMode, tryLogin, tryRegister};
}
 
export default useLoginLogic;