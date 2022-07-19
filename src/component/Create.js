import { useState } from "react";

const Create = () => {

    const[title, setTitle] = useState('');
    const[main, setMain] = useState('');
    const[author, setAuthor] = useState('Linda Ikeji');
    const [ispending, setIsPending] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault();
      const blog = {title, main, author}

      setIsPending(true)

      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
      }).then(() => {
        console.log("new log added");
        setIsPending(false)
      })
    }


  return ( 
    <div>
      <h2>
      Add a New Blog
      </h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
        value={main}
        onChange={(e) => {
          setMain(e.target.value)
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
        {!ispending && <button>Add Blog</button>}
        {ispending && <button> blog is loading .... </button>}
        <p>{title}</p>
        <p>{main}</p>
        <p>{author}</p>
      </form>
    </div>
   );
}
 
export default Create;