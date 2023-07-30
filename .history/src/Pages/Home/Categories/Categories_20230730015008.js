import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import Category from './Category';

const Categories = () => {
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/categories')
            .then(res => res.json())
    })


    if (isLoading) {
        return <Loading></Loading>;

    }


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

export default Categories;