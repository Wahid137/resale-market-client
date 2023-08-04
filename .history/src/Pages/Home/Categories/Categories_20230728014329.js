import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import Category from './Category';

const Categories = () => {
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('https://resale-market-server-wahid137.vercel.app/categories')
            .then(res => res.json())
    })


    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <div className='mx-18grid gap-10 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)

                }
            </div>
        </div>

    );
};

export default Categories;