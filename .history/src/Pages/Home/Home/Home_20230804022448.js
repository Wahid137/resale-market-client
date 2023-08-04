import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Info from '../Info/Info';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Info></Info>
            <AdvertisedItems></AdvertisedItems>
        </div>

    );
};

export default Home;