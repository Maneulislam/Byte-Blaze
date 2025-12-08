import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import Bookmark from './pages/Bookmark.jsx';
import MainLayout from './MainLayout/MainLayout.jsx';
import Blog from './pages/Blog.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,

    children: [
      { index: true, Component: Home },

      { path: "/blogs", Component: Blogs, loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7') },

      { path: "/blog/:id", Component: Blog, loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`) },

      { path: "/bookmarks", Component: Bookmark },



    ],

  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
