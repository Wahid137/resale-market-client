import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const CategoryCards = () => {
    const products = useLoaderData();
    return (
        <div className='bg-warning p-5'>
            <div className='mx-20 grid gap-10 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map((product, i) => <CategoryCard
                        i={i}
                        key={product._id}
                        product={product}
                    ></CategoryCard>)

                }
            </div>
        </div>
    );
};

export default CategoryCards;