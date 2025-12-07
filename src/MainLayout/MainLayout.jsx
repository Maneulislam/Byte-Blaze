import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='h-16'>
                <Navbar></Navbar>
            </div>

            <div className='min-h-[calc(100vh-116px)]'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;