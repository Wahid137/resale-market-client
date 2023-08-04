import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const BookingModal = ({ modalInfo, setModalInfo }) => {
    const { productName, resalePrice } = modalInfo;
    const { register, handleSubmit, refetch, reset, formState: { errors } } = useForm();

    const { user } = useContext(AuthContext)


    const handleBooking = data => {
        console.log(data)


        const booking = {
            userName: data.userName,
            email: data.email,
            productName: data.productName,
            price: data.resalePrice,
            phone: data.mobileNumber,
            meetingLocation: data.meetingLocation

        }

        console.log(booking)

        fetch('https://resale-market-server-wahid137.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Booking is done!")
                    refetch()
                    reset()
                }
                else {
                    //this error message is from server if same email, same date, same appointment
                    toast.error(data.message)
                }
                setModalInfo(null)

            })

    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box  bg-warning relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <form className=" p-10 " onSubmit={handleSubmit(handleBooking)}>

                        <div className="form-control w-full mb-8 relative">
                            <input type="text"
                                {...register("userName")}
                                className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                defaultValue={user?.displayName} disabled />
                            {errors.userName && <p className="text-red-600">{errors.userName?.message}</p>}
                        </div>

                        <div className="form-control w-full mb-8 relative">
                            <input type="email"
                                {...register("email", { required: "Email Address is required" })}
                                className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                defaultValue={user?.email} disabled />
                            {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full mb-8 relative">
                            <input type="text"
                                {...register("productName", { required: "Product name is required" })}
                                className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                defaultValue={productName} disabled />
                            {errors.productName && <p className="text-red-600">{errors.productName?.message}</p>}
                        </div>


                        <div className="form-control w-full mb-8 relative">
                            <input type="number"
                                {...register("resalePrice", { required: "Resale price is required" })}
                                className="border-b-2 relative border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                defaultValue={resalePrice} disabled />
                            {errors.resalePrice && <p className="text-red-600">{errors.resalePrice?.message}</p>}
                        </div>


                        <div className="form-control w-full mb-8 relative">
                            <input type="number"
                                {...register("mobileNumber", { required: "Mobile number is required" })}
                                className="border-b-2 relative bg-warning border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                placeholder='Enter Phone Number' />
                            {errors.mobileNumber && <p className="text-red-600">{errors.mobileNumber?.message}</p>}
                        </div>


                        <div className="form-control w-full mb-8 relative">
                            <input type="text"
                                {...register("meetingLocation", { required: "Meeting Location is required" })}
                                className="border-b-2 relative bg-warning border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                placeholder='Meeting Location' />
                            {errors.meetingLocation && <p className="text-red-600">{errors.meetingLocation?.message}</p>}
                        </div>
                        <br />
                        <div className='mb-5 flex items-center justify-center'>
                            <button className='btn btn-secondary'>Submit</button>
                        </div>

                    </form>
                </div>
            </div>

        </>
    );
};

export default BookingModal;

