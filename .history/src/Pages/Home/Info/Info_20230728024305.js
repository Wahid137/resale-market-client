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
        <div className="hero overflow-hidden h-96 py-10 bg-info">
            <div className="overflow-hidden hero-content flex-col lg:flex-row-reverse">
                <img src={infobike} data-aos="fade-left" data-aos-duration="1500" className="max-w-lg rounded-lg shadow-2xl" alt="" />
                <div className='w-1/2 overflow-hidden' data-aos="fade-right" data-aos-duration="1500">
                    <h1 className="text-5xl font-bold font-serif">Enjoy The Ride</h1>
                    <p className="py-6 font-serif">Hand cycles are similar to recumbent tricycles, but they are powered with hand instead of foot pedals. Velcro straps can be used to secure the hands to the pedals if necessary.</p>
                </div>
            </div>
        </div>
    );
};

export default Info;