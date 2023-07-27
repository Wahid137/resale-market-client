import React from 'react';

const Category = ({ category }) => {
    const { type, img } = category;
    return (
        <div>
            <h2>{img}</h2>
        </div>
    );
};

export default Category;