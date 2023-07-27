import React from 'react';
import cycle1 from '../../../assets/images/cycle4.jpg'

const Info = () => {
    return (
        <div className="hero bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={cycle1} className="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Enjoy The Ride</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
    );
};

export default Info;