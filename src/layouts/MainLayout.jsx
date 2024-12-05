import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <hr />
                <Outlet></Outlet>
                <Toaster />
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;