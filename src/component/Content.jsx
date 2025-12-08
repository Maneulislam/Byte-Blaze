import React from 'react';
import { useLoaderData } from 'react-router';
import svg from '../assets/404.jpg'
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const Content = () => {

    const blog = useLoaderData();

    const { title, reading_time_minutes, comments_count, published_at, cover_image, public_reactions_count, tags, body_html } = blog;

    return (
        <div rel="noopener noreferrer" href="#" className=" border-2 border-primary-50 p-3 hover:border-secondary  mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image || svg} />

            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">

                {
                    tags.map(tag =>
                        <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-gray-200 text-gray-900">#{tag}</a>
                    )
                }

            </div>


            <div className=" space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title.slice(0, 45)}</h3>

            </div>

            <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
    );
};

export default Content;