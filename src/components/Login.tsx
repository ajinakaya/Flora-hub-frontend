
import '../css/login.css';
import Navbar from "../components/navbar.tsx";
import {useNavigate} from "react-router-dom";
import {useMutation} from "react-query";
import axios from "axios";
import {useForm} from "react-hook-form";
const Login =()=>{
    const navigate= useNavigate();
    const loginUser = useMutation({
        mutationKey: "LOGINUSER",
        mutationFn: (loginData: any) => {
            return axios.post("http://localhost:8080/authenticate", loginData, {
                onSuccess:navigate('/')
            });
        },
    });
    const handleLogin =  (values:any) => {
        console.log(values);
        loginUser.mutate(values)
    };
    const {register,
        handleSubmit,
        formState,
        reset
    } = useForm();
    return (
        <>
            <Navbar/>
            <div className="main-loginContainer">
                <div className="left-wrapperLogin"></div>
                <div className="wrapper">
                    <div className="form-box login">
                        <h2>Log In</h2>
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <div className="input-box">
                                <input {...register("email")} type="email" required />
                                <label>Email</label>
                            </div>
                            <div className="input-box">
                                <input {...register("password")} type="password" required />
                                <label>Password</label>
                            </div>
                            <div className="remember-forgot">
                                <label>
                                    <input type="checkbox" />
                                    Remember me
                                </label>
                                <a href="#">Forgot Password?</a>
                            </div>
                            <button type="submit" className="btn">
                                Login
                            </button>
                            <div className="register">
                                <p>
                                    Don't have an account?
                                    <a href="register" className="Login-link">
                                        {' '}
                                        Register
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;
 