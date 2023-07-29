import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import cross from '../../assets/images/crrose.svg';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import useToken from '../../hooks/useToken';
import { toast } from 'react-hot-toast';

const SignUp = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('');//for showing error message
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate()
    useTitle("Sign Up")


    useEffect(() => {
        if (token) {
            console.log(token)
            navigate('/')
        }
    }, [token])

    const handleLogin = (data) => {
        console.log(data)
        setSignUpError("")
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success("User Created Successfully!")
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.user)
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                setSignUpError(error.message)
            })

        reset();

    }
    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }
    return (
        <div className=" flex justify-center items-center h-[780px] bg-teal-50">
            <div className='card shadow-xl bg-white mt-20'>
                <form className=" w-[500px] p-10" onSubmit={handleSubmit(handleLogin)}>
                    <Link to='/'>
                        <div className='absolute top-2 left-0 px-5 pt-5 animate-bounce duration-100'>
                            <img src={cross} alt="" className='w-6' />
                        </div>
                    </Link>
                    <h2 className='text-xl font-bold text-center my-12'>Sign Up</h2>

                    <div className="form-control w-full mb-8 relative">
                        <input type="text"
                            {...register("name", { required: "Name is required" })}
                            className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                            placeholder='Enter Name' />
                        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full mb-8 relative">
                        <input type="email"
                            {...register("email", { required: "Email Address is required" })}
                            className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                            placeholder='Email Address' />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full mb-8 relative">
                        <select
                            {...register("user")}
                            label='Choose your role'
                            className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10">
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                        {errors.user && <p className="text-red-600">{errors.user?.message}</p>}
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
                    <p className='text-center'>Already have an Account? <Link to="/login" className='text-secondary'>Please Login</Link></p>
                    <div>
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SignUp;