import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-116px)]'>
            <ScaleLoader size={500} color='blue'></ScaleLoader>
        </div>
    );
};

export default Loader;