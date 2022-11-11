import React from 'react';
import { Outlet } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';

const Main = () => {
    useTitle('Food Melodies');
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;