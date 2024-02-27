import '../css/login.css';

import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();

    const loginUser = useMutation(
        (loginData: any) => axios.post("http://localhost:8080/authenticate", loginData),
        {
            onSuccess: () => {
                toast.success("Login successful!");
                navigate('/');
            },
            onError: () => {
                toast.error("Login failed. Please check your credentials and try again.");
            }
        }
    );

    const handleLogin = (values: any) => {
        console.log(values);
        loginUser.mutate(values);
    };

    const {
        register,
        handleSubmit,
        formState,
        reset
    } = useForm();

    return (
        <>

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
    );
};

export default Login;
