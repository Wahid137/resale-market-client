import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import cross from '../../assets/images/crrose.svg';
import useTitle from '../../hooks/useTitle';
import useToken from '../../hooks/useToken';



const Login = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('')

    const [token] = useToken(loginUserEmail)
    const location = useLocation();
    const navigate = useNavigate()
    useTitle("Login")
    const from = location.state?.from?.pathname || '/'


    useEffect(() => {
        if (token) {
            console.log(token)
            navigate(from, { replace: true })
        }
    }, [token, navigate, from])

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }




    const handleLogin = (data) => {
        console.log(data)
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoginUserEmail(data.email)
                toast.success("Login Successful!")

            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            })
        reset();

    }



    return (

        <div className=" flex justify-center items-center h-[780px] bg-teal-50">
            <div className='card shadow-xl bg-white'>
                <form className=" w-[500px] p-10" onSubmit={handleSubmit(handleLogin)}>
                    <Link to='/'>
                        <div className='absolute top-2 left-0 px-5 pt-5 animate-bounce duration-100'>
                            <img src={cross} alt="" className='w-6' />
                        </div>
                    </Link>
                    <div className='mt-10'>
                        <h1 className=" font-bold">Admin Info</h1>
                        <p>Email: wahidahmedshanto@gmail.com</p>
                        <p>Password: W@hid1</p>
                        <p className='text-primary'>Don't misuse the admin's power</p>
                    </div>
                    <h2 className='text-xl font-bold text-center my-12'>Login</h2>
                    <div className="form-control w-full mb-8 relative">
                        <input type="text"
                            {...register("email", { required: "Email Address is required" })}
                            className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                            placeholder='Email Address' />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full mb-3 relative">

                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Must be 6 character or more" },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong"
                                }
                            })}
                            className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none  focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                            placeholder='Password' />
                        {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
                    </div>
                    <br />
                    <div className='mb-5 flex items-center justify-center'>
                        <button className='btn btn-secondary'>Login</button>
                    </div>
                    <p className='text-center'>Don't have an Account? <Link to="/signup" className='text-secondary'>Create An Account</Link></p>
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <div className='divider px-12 text-secondary'>OR</div>
                <div className='px-10 pb-10'>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline hover:bg-secondary text-black rounded-3xl w-full'><FcGoogle className='w-10 h-5'></FcGoogle> CONTINUE WITH GOOGLE</button>
                </div>
            </div>

        </div >


    );
};

export default Login;