import useLoginLogic from "./login-logic";
import './login.scss';

const LoginForm = (props) => {
    return (
        <form className="login__login" onSubmit={props.onSubmit}>
            <input type="email" required className="email"/>
            <input type="password" required className="password"/>
            <button>Login</button>
        </form>
    );
}

const RegisterForm = (props) => {
    return (
        <form className="login__register" onSubmit={props.onSubmit}>
            <input type="text" required className="name"/>
            <input type="email" required className="email"/>
            <input type="password" required className="password"/>
            <button>Register</button>
        </form>
    );
}


const LoginPage = (props) => {
    const {loginMode, setLoginMode, tryLogin, tryRegister} = useLoginLogic({mode:'login', props});

    return ( 
        <div id="login">
            <h1>LOGIN</h1>
            <header>
                <button onClick={()=>{setLoginMode('login')}}>Login</button>
                <button onClick={()=>{setLoginMode('register')}}>Register</button>
            </header>
            {loginMode === 'login' && <LoginForm onSubmit={tryLogin}/>}
            {loginMode === 'register' && <RegisterForm onSubmit={tryRegister}/>}
            <p>TODO: Show login info (wrong passowrd, existing user, etc.)</p>
        </div>
     );
}
 
export default LoginPage;