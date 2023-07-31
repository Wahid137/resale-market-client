import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryCards = () => {
    const categories = useLoaderData();
    const { image, productName, location, resalePrice, originalPrice, year, time, email } = categories;
    return (
        <div>
            <h2>{productName}</h2>
            <img src={image} alt="" />
        </div>
    );
};

export default CategoryCards;