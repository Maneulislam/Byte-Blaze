import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import Bookmark from './pages/Bookmark.jsx';
import MainLayout from './MainLayout/MainLayout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,

    children: [
      { index: true, Component: Home },
      { path: "/blogs", Component: Blogs },
      { path: "/bookmarks", Component: Bookmark },
    ],

  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
