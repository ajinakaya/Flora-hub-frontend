
import '../css/Register.css'

import {useMutation} from "react-query";
import axios from "axios";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const navigate = useNavigate();
    const saveData = useMutation({
        mutationKey: "SAVEDATA",
        mutationFn: (requestData: any) => {
            return axios.post("http://localhost:8080/user/save", requestData, {});
        },
        onSuccess: () => {
            toast.success("Registration successful! ");
            navigate("/login");
        },
        onError: () => {
            toast.error("Registration failed. Please try again.");
        },
    });


    const handleregister = (values: any) => {
        console.log("Register button clicked");
        console.log(values);
        saveData.mutate(values)
        navigate("/login")
    };

    const {register,
        handleSubmit,
        formState,
        reset
    } = useForm();
    return (
        <>

            <div className="main-registerContainer">
                <div className="leftwrapperregister"></div>
                <div className="wrapper1">
                    <div className="form-box register">
                        <h2>Register</h2>
                        <form onSubmit={handleSubmit(handleregister)}>
                            <div className="inputbox">
                                <input type="text" {...register("username", { required: true })} />
                                <label>Username</label>
                            </div>
                            <div className="inputbox">
                                <input type="email" {...register("email", { required: true })} />
                                <label>Email</label>
                            </div>
                            <div className="inputbox">
                                <input type="password" {...register("password", { required: true })} />
                                <label>Password</label>
                            </div>

                            <div className="conditions">
                                <label>
                                    <input type="checkbox" />
                                    I agree the terms & conditions
                                </label>
                            </div>
                            <button type="submit" className="register-btn">
                                Register
                            </button>
                            <div className="login">
                                <p>
                                    Already have an account?
                                    <a href="login" className="Register-link">
                                        {' '}
                                        Login
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
export default Register
