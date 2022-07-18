import useFetch from "./useFetch"
import { useParams } from "react-router-dom";



const BlogDetails = () => {
  const {id} = useParams();
  const { data:blog , isPending, error}  = useFetch('http://localhost:8000/blogs/' + id);

    

  return ( <div>
    {isPending && <h2>Its loading......</h2>}
    {error && <h2>{error}</h2>}   
    {blog && (<article>
    <h2>{blog.title}</h2>
      <p>written by {blog.author}</p>
      <p>{blog.main}</p>
      </article>
    )}
  </div> );
}
 
export default BlogDetails;