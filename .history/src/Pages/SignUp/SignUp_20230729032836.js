import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import cross from '../../assets/images/crrose.svg';

const SignUp = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();


    const handleLogin = (data) => {
        console.log(data)

    }
    return (
        <div className=" flex justify-center items-center h-[740px] bg-teal-50">
            <div className='card mt-20 shadow-xl bg-white'>
                <form className=" w-[500px] p-10" onSubmit={handleSubmit(handleLogin)}>
                    <Link to='/'>
                        <div className='absolute top-2 left-0 px-5 pt-5 animate-bounce duration-100'>
                            <img src={cross} alt="" className='w-6' />
                        </div>
                    </Link>
                    <h2 className='text-xl font-bold text-center my-12'>Sign Up</h2>

                    <div className="form-control w-full mb-8 relative">
                        <input type="text"
                            {...register("email", { required: "Email Address is required" })}
                            className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                            placeholder='Email Address' />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>

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
                        <button className='btn btn-secondary'>Sign Up</button>
                    </div>
                    <p className='text-center'>Already have an Account? <Link to="/signup" className='text-secondary'>Please Login</Link></p>
                    {/*  <div>
                {loginError && <p className='text-red-600'>{loginError}</p>}
            </div> */}
                </form>
                <div className='divider px-12'>OR</div>
                <div className='px-10 pb-10'>
                    <button className='btn btn-outline hover:bg-secondary text-black rounded-3xl w-full'><FcGoogle className='w-10 h-5'></FcGoogle> CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;