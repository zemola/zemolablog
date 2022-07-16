const BlogList = ({blogs, handleDelete}) => {

  return (
    <div className="blog-list">
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p> written by {blog.author}</p>
            <button onClick={() => handleDelete(blog.id)}>delete blog</button>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
