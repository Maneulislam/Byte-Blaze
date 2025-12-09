import React from 'react';
import { NavLink } from 'react-router';

const Empty = ({ message, label, address }) => {
    return (
        <div className='min-h-[calc(100vh-116px)] flex flex-col justify-center items-center space-y-5'>
            <p className='text-3xl text-gray-400 font-bold'>{message}</p>
            <NavLink to={address}>
                <a href="#_" class="relative inline-block px-4 py-2 font-medium group">
                    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                    <span class="relative text-black group-hover:text-white">{label}</span>
                </a>
            </NavLink>
        </div>
    );
};

export default Empty;