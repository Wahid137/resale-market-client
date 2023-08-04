import React from 'react';

const MyProductCard = ({ product }) => {
    const { productName, image, resalePrice, originalPrice } = product
    return (
        <div>
            <h1>{productName}</h1>
        </div>
    );
};

export default MyProductCard;