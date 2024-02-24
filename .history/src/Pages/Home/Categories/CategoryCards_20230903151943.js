import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';
import { toast } from 'react-hot-toast';

const CategoryCards = () => {
    // const [finalProducts, setFinalProducts] = useState([])
    const [setModalInfo] = useState(null)
    const products = useLoaderData();
    const finalProducts = [...products]


    const handleUpdateProduct = product => {
        console.log(product)
        fetch(`http://localhost:5000/dashboard/reportedproduct/${product._id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ report: "yes" })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = finalProducts.filter(pdt => pdt._id !== product._id)
                    const reported = finalProducts.find(pdt => pdt._id === product.id)
                    reported.report = "yes"
                    const newProducts = [reported, ...remaining]
                    finalProducts(...newProducts)
                    toast.success(`${finalProducts.productName} is reported successfully!`)
                }
            })

    }



    return (
        <section>
            <div className='bg-warning p-5'>
                <div className='mx-20 grid gap-10 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        finalProducts.map((product, i) => <CategoryCard
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