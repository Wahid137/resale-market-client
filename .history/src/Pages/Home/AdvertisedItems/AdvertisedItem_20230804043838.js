import React from 'react';

const AdvertisedItem = ({ product }) => {
    const { image, productName } = product
    return (
        <div className='bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl' data-aos={card} data-aos-duration="1500">
            <div className='h-80 overflow-hidden'>
                <img className="w-full object-cover" src={img} alt="" />
            </div>
            <div className='px-6 py-4'>
                <p className='font-bold text-xl mb-2 text-center'>{type}</p>
            </div>
        </div>
    );
};

export default AdvertisedItem;