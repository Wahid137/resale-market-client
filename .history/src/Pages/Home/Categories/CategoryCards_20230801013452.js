import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryCards = () => {
    const categories = useLoaderData();
    const { image, productName, location, resalePrice, originalPrice, year, time, email } = categories;
    return (
        <div>
            <h1>Category: {categories.length}</h1>
        </div>
    );
};

export default CategoryCards;