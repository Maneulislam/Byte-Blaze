import React from 'react';
import { Link } from 'react-router';

const Blog = ({ blog }) => {

    console.log(blog);
    return (
        <div>
            <Link rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50">
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={blog.cover_image} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{blog.title}</h3>
                    <span className="text-xs text-gray-400 dark:text-gray-600">{new Date(blog.published_at).toLocaleDateString()}</span>
                    <p>{blog.description}</p>
                </div>
            </Link>
        </div>
    );
};

export default Blog;