import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Category = ({ category }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const { type, img } = category;
    return (
        <div className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform transition hover:-translate-y-5' data-aos="fade-right" data-aos-duration="1500">
            <div className='h-80 overflow-hidden'>
                <img className="w-full object-cover" src={img} alt="" />
            </div>
            <div className='px-6 py-4'>

            </div>
        </div>
    );
};

export default Category;