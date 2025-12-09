import React from 'react';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import wave from '../assets/wave.svg'
import { useNavigation } from 'react-router';
import Loader from '../component/Loader';

const Home = () => {

    const navigation = useNavigation();

    if (navigation.state === 'loading')
        return <Loader></Loader>

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