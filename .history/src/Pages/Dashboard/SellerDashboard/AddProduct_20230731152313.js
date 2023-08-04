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
                    fetch('https://resale-market-server-wahid137.vercel.app/addproduct', {
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
            <h2 className='text-2xl font-bold mb-10'>Add Service</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-secondary p-7'>
                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Service Title</span>
                            </label>
                            <input type="text"
                                {...register("name", { required: "Name is required" })}
                                className="input input-bordered input-accent w-full"
                                placeholder='Enter service title' />
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
    );
};

export default AddProduct;

