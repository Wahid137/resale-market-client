import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import Category from './Category';

const Categories = () => {
    const [index, setIndex] = useState('')
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/categories')
            .then(res => res.json())
    })


    if (isLoading) {
        return <Loading></Loading>;

    }

    if (index === 0) {
        data - aos="fade-right",
            data - aos - duration="1500"
    }
    return (
        <div>
            <div className='mx-20 -mt-20 grid gap-10 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map((category, i) => <Category
                        setIndex={i}
                        key={category._id}
                        category={category}
                    ></Category>)

                }
            </div>
        </div>

    );
};

export default Categories;