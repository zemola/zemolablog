import { useState, useEffect } from "react";
import '../styles/body.css'
import BlogList from "./blogList";

const Body = () => {
 const [blogs, setBlogs] = useState([]);
 const [isPending, setIsPending] = useState(true)

    const handleDelete = (id) => {
        const newBlogs =  blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(()=>{
      fetch('http://localhost:8000/blogs').then(res => {
        return res.json();
      }).then(data =>{
        setBlogs(data);
        setIsPending(false)
      })
    }, []);

  return (
    <div className="body">
       {isPending && <div>loading.....</div>}
       {blogs && <BlogList blogs={blogs} handleDelete = {handleDelete} />}
    </div>
  );
};

export default Body;
