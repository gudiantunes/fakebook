import useLoginLogic from "./login-logic";
import './login.scss';
import {Navigate} from 'react-router-dom';

const LoginForm = (props) => {
    return (
        <form className="login__login" onSubmit={props.onSubmit}>
            <input type="email" required className="email"/>
            <input type="password" required className="password"/>
            <button>Login</button>
        </form>
    );
}

const RegisterForm = () => {
    return (
        <form className="login__register">
            <input type="text" required/>
            <input type="email" required/>
            <input type="password" required/>
            <button>Register</button>
        </form>
    );
}


const LoginPage = (props) => {
    const {loginMode, setLoginMode, tryLogin, tryRegister, gotoHome} = useLoginLogic('login');
    
    return ( 
        <div id="login">
            <h1>LOGIN</h1>
            <header>
                <button onClick={()=>{setLoginMode('login')}}>Login</button>
                <button onClick={()=>{setLoginMode('register')}}>Register</button>
            </header>
            {loginMode === 'login' && <LoginForm onSubmit={tryLogin}/>}
            {loginMode === 'register' && <RegisterForm onSubmit={tryRegister}/>}
            {gotoHome && <Navigate replace to='/'/>}
            <p>Error logs and stuff</p>
        </div>
     );
}
 
export default LoginPage;