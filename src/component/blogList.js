import { Link } from "react-router-dom";

const BlogList = ({blogs}) => {

  return (
    <div className="blog-list">
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`} >
            <h2>{blog.title}</h2>
            <p> written by {blog.author}</p>
            {/* <button onClick={() => handleDelete(blog.id)}>delete blog</button> */}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
