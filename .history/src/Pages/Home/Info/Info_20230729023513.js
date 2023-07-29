import React, { useEffect } from 'react';
import infobike from '../../../assets/images/iinfobike.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Info = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='overflow-hidden bg-warning'>
            <div className="hero py-20 ">
                <div className="hero-content z-auto flex-col lg:flex-row-reverse" >
                    <div className='transition hover:scale-110'>
                        <img src={infobike} data-aos="fade-left" data-aos-duration="1500" className="max-w-xl rounded-lg shadow-2xl ms-10" alt="" />
                    </div>
                    <div className='mt-20 w-1/2 lg:me-20' data-aos="fade-right" data-aos-duration="1500">
                        <h1 className="text-5xl font-bold font-serif ">Enjoy The Ride</h1>
                        <p className="py-6 font-serif text-justify">Hand cycles are similar to recumbent tricycles, but they are powered with hand instead of foot pedals. Velcro straps can be used to secure the hands to the pedals if necessary.</p>
                    </div>
                </div>
            </div>
            <div className='text-center mb-10' data-aos="flip-right">
                <PrimaryButton>About Us</PrimaryButton>
            </div>
        </div>
    );

};

export default Info;