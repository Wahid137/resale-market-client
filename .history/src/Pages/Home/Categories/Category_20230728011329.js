import React from 'react';

const Category = ({ category }) => {
    const { type, img } = category;
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Category;