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
        <div className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform transition hover:-translate-y-5 aos-init aos-animate' data-aos="fade-right" data-aos-duration="1500">
            <div>
                <img src={img} alt="" />
            </div>
            <div>

            </div>
        </div>
    );
};

export default Category;