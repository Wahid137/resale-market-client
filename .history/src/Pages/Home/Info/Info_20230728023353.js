import React, { useEffect } from 'react';
import infobike from '../../../assets/images/iinfobike.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Info = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="hero h-96 my-32 bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={infobike} className="max-w-lg rounded-lg shadow-2xl" alt="" />
                <div className='w-1/2' data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <h1 className="text-5xl font-bold font-serif">Enjoy The Ride</h1>
                    <p className="py-6 font-serif">Hand cycles are similar to recumbent tricycles, but they are powered with hand instead of foot pedals. Velcro straps can be used to secure the hands to the pedals if necessary.</p>
                </div>
            </div>
        </div>
    );
};

export default Info;