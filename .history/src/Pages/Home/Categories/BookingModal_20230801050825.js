import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useForm } from 'react-hook-form';

const BookingModal = ({ modalInfo, setModalInfo }) => {
    const { productName, resalePrice } = modalInfo;
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { user } = useContext(AuthContext)


    const handleBooking = data => {
        console.log(data)
        /*  event.preventDefault();
         const form = event.target;
         const slot = form.slot.value;
         const name = form.name.value;
         const email = form.email.value;
         const phone = form.phone.value;
 
         const booking = {
             treatment: treatmentName,
             appointmentDate: date,
             slot,
             patient: name,
             email,
             phone,
             price
         }
         console.log(booking)
         fetch('http://localhost:5000/bookings', {
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
                     form.reset()
                 }
                 else {
                     //this error message is from server if same email, same date, same appointment
                     toast.error(data.message)
                 }
                 setTreatment(null)
 
             }) */

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
                                {...register("userName", { required: "Product name is required" })}
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
                                className="border-b-2 relative bg-warning text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                                placeholder='Location' />
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

{/* <input disabled type="text" value={date} className="input input-bordered w-full" />
<select name="slot" className="select select-bordered w-full">
    {
        slots.map((slot, i) => <option
            key={i}
            value={slot}
        >{slot}</option>
        )
    }

</select>
<input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full" />
<input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full" />
<input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full" />
<input type="submit" value="Submit" className="btn btn-accent w-full" /> */}