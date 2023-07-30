import React from 'react';
import useTitle from '../../../hooks/useTitle';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const MakeAdmin = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate()
    useTitle("Make Admin")
    const from = location.state?.from?.pathname || '/'



    const handleAdmin = (data) => {
        fetch(`https://jerins-parlour-server-sepia.vercel.app/users/admin/${data.email}`, {
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
                <form onSubmit={handleSubmit(handleAdmin)} className='flex bg-secondary p-5 h-72'>

                    <div className="form-control w-full max-w-sm">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered input-accent w-full"
                            placeholder='Email Address' />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>

                    <div className='mt-9 ms-12'>
                        <input className='btn btn-primary btn-md mb-5' type="submit" value="Submit" />
                    </div>

                </form>

            </div>
        </div>
    );
};

export default MakeAdmin;