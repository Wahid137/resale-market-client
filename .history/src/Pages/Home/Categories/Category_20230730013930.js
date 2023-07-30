import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';




const Category = ({ category, i }) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const { type, img, i } = category;
    if (i === 0) {
        var aos = "fade-left"
    }

    return (
        <Link>
            <div className='bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl' data-aos={aos} data-aos-offset="300" data-aos-easing="ease-in-sine">
                <div className='h-80 overflow-hidden'>
                    <img className="w-full object-cover" src={img} alt="" />
                </div>
                <div className='px-6 py-4'>
                    <p className='font-bold text-xl mb-2 text-center'>{type}</p>
                </div>
            </div>
        </Link>

    );
};

export default Category;