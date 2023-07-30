import React from 'react';
import useTitle from '../../../hooks/useTitle';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AllBuyer = () => {
    useTitle("All Buyer")
    /*  const url = "http://localhost:5000/users?role=buyer"
 
     const { data: buyers = [], isLoading } = useQuery({
         queryKey: ['buyers'],
         queryFn: async () => {
             const res = await fetch(url, {
                 headers: {
                     authorization: `bearer ${localStorage.getItem('accessToken')}`
                 }
             })
             const data = await res.json()
             return data;
         }
     })
 
     if (isLoading) {
         return <Loading></Loading>
     } */
    return (
        <div>
            <h2>All Buyer: {buyers.length}</h2>
        </div>
    );
};

export default AllBuyer;