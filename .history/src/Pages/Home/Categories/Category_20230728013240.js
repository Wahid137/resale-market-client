import React from 'react';

const Category = ({ category }) => {
    const { type, img } = category;
    return (
        <div className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform transition hover:-trans'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>

            </div>
        </div>
    );
};

export default Category;