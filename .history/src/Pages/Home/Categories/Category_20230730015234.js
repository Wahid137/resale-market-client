import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';




const Category = ({ category, i }) => {
    const [card, setCard] = useState('')

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const { type, img } = category;

    useEffect(() => {
        if (i === 0) {
            const task = "fade-right"
            setCard(task)

        }
    }, [])
    console.log(card)

    return (
        <Link>
            <div className='bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl' data-aos={card} data-aos-duration="1500">
                <div className='h-80 overflow-hidden'>
                    <img className="w-full object-cover" src={img} alt="" />
                </div>
                <div className='px-6 py-4'>
                    <p className='font-bold text-xl mb-2 text-center'>{type}</p>
                </div>
            </div>
        </Link>

    );
};

export default Category;