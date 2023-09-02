import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';
import { toast } from 'react-hot-toast';

const CategoryCards = () => {
    const [totalProducts, setTotalProducts] = useState([])
    const [setModalInfo] = useState(null)
    const products = useLoaderData();

    const handleUpdateProduct = product => {
        console.log(product)
        fetch(`http://localhost:5000/dashboard/reportedproduct/${product._id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`${product.productName} is reported successfully!`)
                }
            })

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
                            handleUpdateProduct={handleUpdateProduct}
                            setModalInfo={setModalInfo}
                        ></CategoryCard>)

                    }
                </div>
            </div>
        </section>

    );
};

export default CategoryCards;