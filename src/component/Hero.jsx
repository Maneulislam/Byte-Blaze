import React from 'react';
import { NavLink } from 'react-router';

const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-[calc(100vh-116px)] ">
            <div className="hero-content text-center -mt-16">
                <div className="max-w-lg">
                    <h1 className="text-4xl font-bold ">Welcome to <span className='bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient'>Byte</span><span className='bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient'>Blaze</span>
                    </h1>
                    <p className="py-6">
                        ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it

                    </p>

                    <div className='space-x-5'>
                        <NavLink to={'/blogs'}>
                            <a href="#_" class="relative inline-block px-4 py-2 font-medium group">
                                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                                <span class="relative text-black group-hover:text-white">Read Blogs</span>
                            </a>
                        </NavLink>

                        <NavLink to={'/bookmarks'}>
                            <a href="#_" class="relative inline-block px-4 py-2 font-medium group">
                                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                                <span class="relative text-black group-hover:text-white">Bookmarks</span>
                            </a>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;