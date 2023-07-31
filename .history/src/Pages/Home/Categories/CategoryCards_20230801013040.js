import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryCards = () => {
    const categories = useLoaderData();
    const { image, productName, location, resalePrice, originalPrice, year, time, email } = categories;
    return (
        <div className=' overflow-hidden rounded-lg shadow-md hover:shadow-xl'>
            <div className='h-80 overflow-hidden'>
                <img className="w-full object-cover" src={image} alt="" />
            </div>

        </div>
    );
};

export default CategoryCards;