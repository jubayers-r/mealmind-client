import React from 'react';
import Hero from '../components/Hero';
import TopFoods from '../components/TopFoods';
import Banner from '../components/Banner';
import FAQ from '../components/FAQ';
import { useLoaderData } from 'react-router';

const Home = () => {
    const topFoods = useLoaderData();
    return (
        <div>
            <Hero/>
            <TopFoods topFoods={topFoods}/>
            <Banner/>
            <FAQ/>
        </div>
    );
};

export default Home;