import React from 'react';

const CategoryCard = ({ product }) => {
    const { image, productName, location, resalePrice, originalPrice, year, time, email } = product


    return (
        <div>
            <img src={image} alt="" />
            <h2>Product Name: {productName}</h2>
        </div>
    );
};

export default CategoryCard;