import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";



const Login = () => {

    const {loginUser, setUser, logInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
        .then(result =>{
            const user = result.user;
            if (user) {
                toast.success(`Successfully Login ${user.email}`);
                setUser(user);
                navigate(location?.state ? location.state : "/")
            } 
        })
        .catch((error) => {
            toast.error(`Wrong Email or Password`);
            
        })
    }
    const handleGoogleLogin = () =>{
        logInWithGoogle()
        .then(result =>{
            const user = result.user;
            if (user) {
                toast.success(`Successfully Login ${user.email}`);
                setUser(user);
                navigate(location?.state ? location.state : "/")
            } 
        })
        .catch(error => {
            toast.error(`Wrong Email or Password`);
        })
    }


    return (
        <div className="w-10/12 md:w-8/12 lg:w-6/12 mx-auto min-h-screen">
            <h2 className="text-3xl text-center font-bold my-5 text-green-700">Login Your Account</h2>

            <form onSubmit={handleLogin} className="flex flex-col items-center gap-3">
                {/* email */}
                <div className="w-[80%]">
                    <label htmlFor="email" className="text-[15px] font-[400]">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="border-[#e5eaf2] border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
                        required />
                </div>


                <div className="w-[80%]">
                    <label htmlFor="password" className="text-[15px] font-[400]">
                        Password <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="border-[#e5eaf2] border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
                        required />
                </div>
                <h2 className="text-right">Don't Have Account? <Link to="/register" className="text-orange-800 font-bold">Register</Link></h2>
                <div>
                    <input className="btn bg-green-700 hover:text-black text-white" type="submit" value="Login" />
                </div>
            </form>
           <div className='flex items-center justify-center mt-5'>
           <button onClick={handleGoogleLogin} className="btn hover:text-black text-black"><span className='text-bold'><FcGoogle/></span>SignIn With Google</button>
           </div>
        </div>
    );
};

export default Login;