import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Info from '../Info/Info';

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Banner></Banner>
            <Categories></Categories>
            <Info></Info>
        </div>

    );
};

export default Home;