import React from 'react';

const Category = ({ category }) => {
    const { type, img } = category;
    return (
        <div className=''>
            <div>
                <img src={img} alt="" />
            </div>
            <div>

            </div>
        </div>
    );
};

export default Category;