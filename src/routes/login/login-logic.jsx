import { useState } from "react";

const useLoginLogic = ({mode, props}) => {
    const [loginMode, setLoginMode] = useState(mode);

    const tryLogin = (event) => {
        event.preventDefault();
        
        const emails = Object.keys(props.usersData);
        const email = event.target.querySelector('.email').value;
        const pass = event.target.querySelector('.password').value;
        if (emails.includes(email)) {
            if(pass === props.usersData[email].password){
                props.navigate(`/?user=${email}`)
            } else {
                console.log('wrong password')
            }
        } else {
            console.log('not-login');
        }
    }

    const tryRegister = (event) => {
        event.preventDefault();

        const emails = Object.keys(props.usersData);
        const email = event.target.querySelector('.email').value;
        const pass = event.target.querySelector('.password').value;
        const name = event.target.querySelector('.name').value;

        if (emails.includes(email)) {
            console.log('user exist');
        } else {
            const newUser = {};
            newUser[email] = {
                'name': name,
                'password': pass,
                'friends': []
            }
            
            props.addUser(newUser);
            props.navigate(`/?user=${email}`);
        }
    }

    return {loginMode, setLoginMode, tryLogin, tryRegister};
}
 
export default useLoginLogic;