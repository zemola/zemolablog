import { useState, useEffect } from "react";
import '../styles/body.css'
import BlogList from "./blogList";

const Body = () => {
 const [blogs, setBlogs] = useState([
{    title: 'My new website', main: "testinggsdkhdbdh sdjsjssjssjs samsdkjssdksd sdsdjssdmksdsdmwsd,wdwddwdknw wdjw wdikcwcwdkwijdwcwkjdlwc wkwjwwwjwjwdwd wdwkw w j wdjw jwd wd wdjwdc wdlnwd cw., wd w wd wd wdc w kkjsdfc ,dfc wdwwwcd", author: 'mario', id: 1 },
{    title: 'welcome party!!', main: "testinggsdkhdbdh sdjsjssjssjs samsdkjssdksd sdsdjssdmksdsdmwsd,wdwddwdknw wdjw wdikcwcwdkwijdwcwkjdlwc wkwjwwwjwjwdwd wdwkw w j wdjw jwd wd wdjwdc wdlnwd cw., wd w wd wd wdc w kkjsdfc ,dfc wdwwwcd", author: 'Ade', id: 2 },
{    title: 'web dev top tios', main: "testinggsdkhdbdh sdjsjssjssjs samsdkjssdksd sdsdjssdmksdsdmwsd,wdwddwdknw wdjw wdikcwcwdkwijdwcwkjdlwc wkwjwwwjwjwdwd wdwkw w j wdjw jwd wd wdjwdc wdlnwd cw., wd w wd wd wdc w kkjsdfc ,dfc wdwwwcd", author: 'taiwo', id: 3 }, ])

    const handleDelete = (id) => {
        console.log(id)
        const newBlogs =  blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

  return (
    <div className="body">
        <BlogList blogs={blogs} handleDelete = {handleDelete} />
    </div>
  );
};

export default Body;
