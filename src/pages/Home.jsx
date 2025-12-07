import React from 'react';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import wave from '../assets/wave.svg'

const Home = () => {
    return (
        <div >
            <div className='relative  flex flex-col items-center  '>
                <Hero></Hero>

                <img className='absolute bottom-0 w-full' src={wave} alt="" />
            </div>
        </div>
    );
};

export default Home;