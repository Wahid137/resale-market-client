import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryCards = () => {
    const categories = useLoaderData();
    const { image, productName, location, resalePrice, originalPrice, year, time, email } = categories;
    return (
        <div className='bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl' data-aos-duration="1500">
            <div className='h-80 overflow-hidden'>
                <img className="w-full object-cover" src={image} alt="" />
            </div>

        </div>
    );
};

export default CategoryCards;