import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryCards = () => {
    const  = useLoaderData();
    return (
        <div>
            <div className='mx-20 -mt-20 grid gap-10 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map((category, i) => <Category
                        i={i}
                        key={category._id}
                        category={category}
                    ></Category>)

                }
            </div>
        </div>
    );
};

export default CategoryCards;