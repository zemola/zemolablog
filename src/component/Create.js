import { useState } from "react";

const Create = () => {

    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('Linda Ikeji');

  return ( 
    <div>
      <h2>
      Add a New Blog
      </h2>
      <form>
        <label>Blog title:</label>
        <input type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
        value={body}
        onChange={(e) => {
          setBody(e.target.value)
        }}
          required
        ></textarea>
        <label>Blog author:</label>
        <select value={author}
        onChange={(e)=>{
          setAuthor(e.target.value)
        }}>
        <option value="Linda Ikeji"> Linda Ikeji</option>
        <option value="Instablog"> Instablog</option>
        </select>
        <button>Add Blog</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
   );
}
 
export default Create;