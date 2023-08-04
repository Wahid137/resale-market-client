import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';
import BookingModal from './BookingModal';

const CategoryCards = () => {
    const [modalInfo, setModalInfo] = useState(null)
    const [verify, setVerify] = useState('')
    const products = useLoaderData();


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
        </section>

    );
};

export default CategoryCards;