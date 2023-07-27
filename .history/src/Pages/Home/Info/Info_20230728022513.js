import React from 'react';
import infobike from '../../../assets/images/iinfobike.jpg'

const Info = () => {
    return (
        <div className="hero my-20 bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={infobike} className="max-w-sm rounded-lg" alt="" />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Enjoy The Ride</h1>
                    <p className="py-6">Hand cycles are similar to recumbent tricycles, but they are powered with hand instead of foot pedals. Velcro straps can be used to secure the hands to the pedals if necessary.</p>
                </div>
            </div>
        </div>
    );
};

export default Info;