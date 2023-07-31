import React from 'react';

const CategoryCard = ({ product }) => {
    const { image, productName, location, resalePrice, originalPrice, year, time, email } = product


    return (
        <div className='bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl'>
            <div className='h-80 overflow-hidden'>
                <img className="w-full object-cover" src={image} alt="" />
            </div>
            <div className='px-6 py-4'>
                <p className='font-bold text-xl mb-2 text-center'>Product Name: {productName}</p>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <p className=' text-xl mb-2 text-center'>Location: {location}</p>

            </div>


        </div>
    );
};

export default CategoryCard;