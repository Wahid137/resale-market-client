import React, { useState } from 'react';
import CategoryCard from './CategoryCard';
import BookingModal from './BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const CategoryCards = () => {
    const [modalInfo, setModalInfo] = useState(null)
    const [verify, setVerify] = useState('')

    const url = (`https://resale-market-server-wahid137.vercel.app/category${params.type}`)

    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['products'],
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
    }
    return (
        <section>
            <div className='bg-warning p-5'>
                <div className='mx-20 grid gap-10 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        products.map((product, i) => <CategoryCard
                            i={i}
                            key={product._id}
                            product={product}
                            setVerify={setVerify}
                            verify={verify}
                            setModalInfo={setModalInfo}
                        ></CategoryCard>)

                    }
                </div>
            </div>
            {
                modalInfo &&
                <BookingModal
                    setModalInfo={setModalInfo}
                    modalInfo={modalInfo}
                    refetch={refetch}
                ></BookingModal>
            }

        </section>

    );
};

export default CategoryCards;