import useFetch from './useFetch';
import '../styles/body.css'
import BlogList from "./blogList";

const Body = () => {

  const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    // const handleDelete = (id) => {
    //     const newBlogs =  blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs)
    // }


  return (
    <div className="body">
      {error && <div>Could not fetch data</div> }
       {isPending && <div>loading.....</div>}
       {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Body;
