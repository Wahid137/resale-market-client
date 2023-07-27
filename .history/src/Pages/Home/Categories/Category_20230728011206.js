import React from 'react';

const Category = ({ Category }) => {
    const { type, img } = Category;
    return (
        <div>
            <h2>{img}</h2>
        </div>
    );
};

export default Category;