import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryCards = () => {
    const categories = useLoaderData();
    return (
        <div>
            <h2>This is category card</h2>
        </div>
    );
};

export default CategoryCards;