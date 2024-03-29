import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';

const MakeAdmin = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    useTitle("Make Admin")



    const handleAdmin = (data) => {
        fetch(`https://resale-market-server-wahid137.vercel.app/users/admin/${data.email}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successfully')
                }
                else {
                    toast.error(data.message)
                }
            })

        reset();

    }

    return (
        <div>
            <div className='p-7'>
                <h2 className='text-2xl font-bold mb-10'>Make Admin</h2>
                <form onSubmit={handleSubmit(handleAdmin)} className='flex bg-warning p-5 h-72'>

                    <div className="form-control w-full max-w-sm">
                        <label className="label">
                            <span className="label-text text-accent font-bold">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered input-accent w-full bg-white"
                            placeholder='Email Address' />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>

                    <div className='mt-9 ms-12'>
                        <input className='btn btn-secondary btn-md mb-5' type="submit" value="Submit" />
                    </div>

                </form>

            </div>
        </div>
    );
};

export default MakeAdmin;