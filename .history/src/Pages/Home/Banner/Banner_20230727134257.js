import React from 'react';
import cycle4 from '../../../assets/images/cycle4.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${cycle4})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">Select Your Bike From Larana Bike Store</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;