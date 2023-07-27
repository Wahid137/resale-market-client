import React, { useEffect } from 'react';
import cycle4 from '../../../assets/images/cycle4.jpg';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${cycle4})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-2xl">
                    <h1 className="mb-5 text-5xl font-bold font-serif leading-snug" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" d>Choose Your Bike From Larana Bike Store</h1>
                    <div className="mt-16" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                        <PrimaryButton>EXplore Now</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;