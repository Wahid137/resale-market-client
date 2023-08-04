import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

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


        </div>
    );
};

export default Categories;