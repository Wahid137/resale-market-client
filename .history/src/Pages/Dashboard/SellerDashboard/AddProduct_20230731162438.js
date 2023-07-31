import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import { toast } from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import upload from '../../../assets/icons/upload.png';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
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
            <div className=" flex justify-center items-center bg-teal-50">
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
                                placeholder='Mobile Number' />
                            {errors.mobileNumber && <p className="text-red-600">{errors.mobileNumber?.message}</p>}
                        </div>

                        <div className="form-control w-full mb-8 relative">
                            <input type="text"
                                {...register("location", { required: "Location is required" })}
                                className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                placeholder='Location' />
                            {errors.location && <p className="text-red-600">{errors.location?.message}</p>}
                        </div>

                        <div className="form-control w-full mb-8 relative">
                            <select
                                {...register("category")}
                                className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10">
                                <option value="">Product Category</option>
                                <option value="roadCycle">Road Cycle</option>
                                <option value="mountainCycle">Mountain Cycle</option>
                                <option value="hybridCycle">Hybrid Cycle</option>
                            </select>
                            {errors.category && <p className="text-red-600">{errors.category?.message}</p>}
                        </div>


                        <div className="form-control w-full mb-8 relative">
                            <input type="textarea"
                                {...register("description", { required: "Description is required" })}
                                className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                placeholder='Enter Description' />
                            {errors.description && <p className="text-red-600">{errors.description?.message}</p>}
                        </div>

                        <div className="form-control w-full mb-8 relative">
                            <input type="number"
                                {...register("year", { required: "Year is required" })}
                                className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                placeholder='Years of your purchase' />
                            {errors.year && <p className="text-red-600">{errors.year?.message}</p>}
                        </div>

                        <div className="form-control w-full mb-8 relative">
                            <input type="date"
                                {...register("time", { required: "Time is required" })}
                                className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                placeholder='Time when you posted' />
                            {errors.time && <p className="text-red-600">{errors.time?.message}</p>}
                        </div>


                        <div className="form-control w-full mb-8 relative">
                            <input type="email"
                                {...register("email", { required: "Email Address is required" })}
                                className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                defaultValue={user?.email} />
                            {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                        </div>


                        <br />
                        <div className='mb-5 flex items-center justify-center'>
                            <button className='btn btn-secondary'>Submit</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>


    );
};

export default AddProduct;

