import React from 'react';
import Service from '../Service/Service';
import About from './About';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Service></Service>
            <About></About>
        </div>
    );
};

export default Home;