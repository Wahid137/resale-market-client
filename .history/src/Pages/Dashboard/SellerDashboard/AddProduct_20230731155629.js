import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import { toast } from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import upload from '../../../assets/icons/upload.png';

const AddProduct = () => {
    const { register, handleSubmit, isLoading, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);
    const navigate = useNavigate();
    useTitle("Add Product")

    const handleAddProduct = data => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    const product = {
                        name: data.name,
                        description: data.description,
                        image: imgData.data.url
                    }
                    console.log(product)
                    //save add service's information in database
                    fetch('http://localhost:5000/dashboard/addproduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            toast.success(`${data.name} is added successfully`)
                            navigate('/dashboard/myproduct')
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='p-7'>
            <h2 className='text-2xl font-bold mb-10'>Add Product</h2>
            <div className=" flex justify-center items-center h-[780px] bg-teal-50">
                <div className='card shadow-xl bg-white mt-20'>
                    <form className=" w-[500px] p-10" onSubmit={handleSubmit(handleAddProduct)}>

                        <div className="form-control w-full mb-8 relative">
                            <input type="text"
                                {...register("productName", { required: "Product name is required" })}
                                className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                placeholder='Enter Name' />
                            {errors.productName && <p className="text-red-600">{errors.productName?.message}</p>}
                        </div>

                        <div className="form-control w-full mb-8 relative">
                            <input type="number"
                                {...register("originalPrice", { required: "Original price is required" })}
                                className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                placeholder='Enter Original Price' />
                            {errors.originalPrice && <p className="text-red-600">{errors.originalPrice?.message}</p>}
                        </div>

                        <div className="form-control w-full mb-8 relative">
                            <input type="number"
                                {...register("resalePrice", { required: "Resale price is required" })}
                                className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                placeholder='Enter Resale Price' />
                            {errors.resalePrice && <p className="text-red-600">{errors.resalePrice?.message}</p>}
                        </div>

                        <div className="form-control w-full mb-8 relative">
                            <select
                                {...register("condition")}
                                className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10">
                                <option value="">Condition Type</option>
                                <option value="excellent">Excellent</option>
                                <option value="good">Good</option>
                                <option value="fair">Fair</option>
                            </select>
                            {errors.condition && <p className="text-red-600">{errors.condition?.message}</p>}
                        </div>

                        <div className="form-control w-full mb-8 relative">
                            <input type="number"
                                {...register("mobileNumber", { required: "Mobile number is required" })}
                                className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                placeholder='Enter Resale Price' />
                            {errors.mobileNumber && <p className="text-red-600">{errors.mobileNumber?.message}</p>}
                        </div>

                        <div className="form-control w-full mb-8 relative">
                            <input type="text"
                                {...register("location", { required: "Location is required" })}
                                className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                placeholder='Enter Name' />
                            {errors.location && <p className="text-red-600">{errors.location?.message}</p>}
                        </div>

                        <div className="form-control w-full mb-8 relative">
                            <select
                                {...register("condition")}
                                className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10">
                                <option value="">Condition Type</option>
                                <option value="excellent">Excellent</option>
                                <option value="good">Good</option>
                                <option value="fair">Fair</option>
                            </select>
                            {errors.condition && <p className="text-red-600">{errors.condition?.message}</p>}
                        </div>

                        <div className="form-control w-full mb-8 relative">
                            <input type="email"
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
                        <p className='text-center'>Already have an Account? <Link to="/login" className='text-secondary'>Please Login</Link></p>
                        <div>
                            {signUpError && <p className='text-red-600'>{signUpError}</p>}
                        </div>
                    </form>

                </div>
            </div>
        </div>


    );
};

export default AddProduct;

