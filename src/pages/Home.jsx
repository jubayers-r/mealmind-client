import React from 'react';
import Hero from '../components/Hero';
import TopFoods from '../components/TopFoods';
import Banner from '../components/Banner';
import FAQ from '../components/FAQ';
import { useLoaderData } from 'react-router';
import NewsletterCard from '../components/NewsletterCard';

const Home = () => {
    const topFoods = useLoaderData();
    return (
        <div>
            <Hero/>
            <TopFoods topFoods={topFoods}/>
            <FAQ/>
            <NewsletterCard/>
        </div>
    );
};

export default Home;