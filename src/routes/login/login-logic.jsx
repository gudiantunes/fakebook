import axios from "axios";
import { useEffect, useState } from "react";

const useLoginLogic = (mode) => {
    const [loginMode, setLoginMode] = useState(mode);
    const [gotoHome, setGotoHome] = useState(false);
    const [users, setUsers] = useState({});

    const getUsers = async () => {
        const {data} = await axios.get("http://localhost:3000/users");
        setUsers(data)
    }

    useEffect(()=>{getUsers()}, [])

    const tryLogin = (event) => {
        event.preventDefault();
        getUsers()
        
        const emails = Object.keys(users);
        const email = event.target.querySelector('.email').value;

        if (emails.includes(email)) {
            console.log('login');
            setGotoHome(true);
        } else {
            console.log('not-login');
        }
    }

    const tryRegister = () => {
        return 'a'
    }

    return {loginMode, setLoginMode, tryLogin, tryRegister, gotoHome};
}
 
export default useLoginLogic;