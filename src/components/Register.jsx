import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from 'react-hot-toast';


const Register = () => {
    const {setUser, updateUserProfile, createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.namee.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length<6){
            toast.error("Password Should be 6 character");
            return;
        }
        const regex1 = /(?=.*[a-z])/;
        if(regex1.test(password) == false){
            toast.error("Password At least one LowerCase");
            return;
        }
        const regex2 = /(?=.*[A-Z])/;
        if(regex2.test(password) == false){
            toast.error("Password At least one Uppercase Letter");
            return;
        }

        createUser(email, password)
        .then((result)=>{
            const user = result.user;
            toast.success("Congratulations. Signup Successfull")
            setUser(user);
            updateUserProfile({displayName: name, photoURL: photo})
            .then(()=>{
                navigate('/')
            })
            .catch(err =>{
                toast.error(`${err.message}`)
            })
        })
        .catch(error => {
            console.log(error);
        });
        

        

    }
    return (
        <div className="w-10/12 md:w-8/12 lg:w-6/12 mx-auto min-h-screen">
            <h2 className="text-3xl text-center font-bold my-5 text-green-700">Register Your Account</h2>
            
            <form onSubmit={handleRegister} className="flex flex-col items-center gap-3">
                {/* name */}
                <div className="w-[80%]">
                    <label htmlFor="photo" className="text-[15px] font-[400]">
                        Name 
                    </label>
                    <input
                        type="text"
                        name="namee"
                        placeholder="Name"
                        className="border-[#e5eaf2] border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
                    />
                </div>
                <div className="w-[80%]">
                    <label htmlFor="photo" className="text-[15px] font-[400]">
                        Photo URL 
                    </label>
                    <input
                        type="text"
                        name="photo"
                        placeholder="photo URL"
                        className="border-[#e5eaf2] border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
                    />
                </div>

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
                    required/>
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
                    required/>
                </div>
                <h2 className="text-right">Already Have Account? <Link to="/login" className="text-orange-800 font-bold">Login</Link></h2>
                <div>
                    <input className="btn bg-green-700 hover:text-black text-white" type="submit" value="Register" />
                </div>
            </form>
        </div>
    );
};

export default Register;
