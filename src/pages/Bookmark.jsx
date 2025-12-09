/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from 'react';
import BlogCard from '../component/BlogCard';
import { deleteBlog, getBlog } from '../utilities';
import Empty from '../component/Empty';
import { useNavigation } from 'react-router';
import Loader from '../component/Loader';

const Bookmark = () => {

    const navigation = useNavigation();

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const storedBlogs = getBlog();
        setBlogs(storedBlogs)
    }, [])


    const handleDelete = (id) => {
        deleteBlog(id);

        const storedBlogs = getBlog();
        setBlogs(storedBlogs);
    }


    if (navigation.state === 'loading')
        return <Loader></Loader>


    if (blogs.length === 0) return <Empty address={'/blogs'} message="No bookmarks Found" label={"Browse Blogs"}></Empty >


    return (

        <div >
            <div className="grid px-4  sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-6  sm:grid-cols-2 lg:grid-cols-3 ">
                {
                    blogs.map(blog => <BlogCard handleDelete={handleDelete} deletable={true} blog={blog} key={blog.id}></BlogCard>)
                }

            </div>
        </div>

    );
};

export default Bookmark;