import toast from "react-hot-toast";

export const getBlog = () => {
    let blogs = [];
    const storedBlog = localStorage.getItem("blogs");

    if (storedBlog) {
        blogs = JSON.parse(storedBlog);
    }
    return blogs;
}


export const saveBlog = (blog) => {
    let blogs = getBlog();

    const isExist = blogs.find(b => b.id === blog.id)

    if (isExist) {
        return toast.error("Already Bookmarked")
    }
    blogs.push(blog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    toast.success("Blog Bookmarked Successfully")
}



export const deleteBlog = (id) => {
    let blogs = getBlog();

    const remaining = blogs.filter(b => b.id !== id)
    localStorage.setItem("blogs", JSON.stringify(remaining));
    toast.success("Blog Remove From Bookmark!!")
}