import React from 'react';
import { Link } from 'react-router';
import svg from '../assets/404.jpg'
import { MdDeleteForever } from "react-icons/md";


const BlogCard = ({ blog, deletable, handleDelete }) => {

    return (

        <div className='relative flex'>

            <Link to={`/blog/${blog.id}`} rel="noopener noreferrer" href="#" className="transition border-2 border-primary-40  hover:border-secondary hover:scale-105   max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50">
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={blog.cover_image || svg} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{blog.title.slice(0, 45)}</h3>
                    <span className="text-xs text-gray-400 dark:text-gray-600">{new Date(blog.published_at).toLocaleDateString()}</span>
                    <p>{blog.description}</p>
                </div>


            </Link>

            {
                deletable && (
                    <div onClick={() => handleDelete(blog.id)} className='absolute -top-5 right-5 bg-fuchsia-100 rounded-full p-3  hover:scale-105 hover:bg-blue-200' >
                        <MdDeleteForever size={25} className='text-secondary'></MdDeleteForever>
                    </div>
                )



            }


        </div>
    );
};

export default BlogCard;