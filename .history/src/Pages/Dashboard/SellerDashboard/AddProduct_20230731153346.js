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

    const handleAddDoctor = data => {
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
                    fetch('https://resale-market-server-wahid137.vercel.app/dashboard/addproduct', {
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
            <form onSubmit={handleSubmit(handleAddDoctor)}>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-warning p-7'>
                    <div>
                        <div className="form-control w-full mb-8 relative">
                            <input type="text"
                                {...register("name", { required: "Name is required" })}
                                className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                placeholder='Enter Name' />
                            {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Description</span>
                            </label>
                            <input type="textarea"
                                {...register("description", { required: "Description is required" })}
                                className='textarea textarea-accent text-my-4 h-24' placeholder="Enter Description" />
                            {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                        </div>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Image</span>
                        </label>
                        <img src={upload} className='w-10 position-absolute' alt="" />
                        <input type="file"
                            {...register("image", { required: "photo is required" })}
                            className="btn btn-primary" />
                        {errors.img && <p className="text-red-600">{errors.img?.message}</p>}
                    </div>
                </div>


                <br />
                <div className='text-end'>
                    <input className='btn btn-primary btn-sm' type="submit" value="Submit" />
                </div>
            </form>
        </div>

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

export default AddProduct;

