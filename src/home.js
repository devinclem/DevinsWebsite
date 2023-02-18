import { useState } from "react";
import './index.css';
import BlogList from "./BlogList";

const Home = () => {
    const[blogs, setBlogs] = useState([
        {title: "My new website", body: "Bruh", author: "Jerp", id: 1},
        {title: "I like hot dogs", body: "hot dogs re my favorite", author: "Devin", id: 2},
        {title: "My new ", body: "Bruh", author: "Seven", id: 3},
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs}title ="All Messages"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === "Devin")} title ="Devins Blogs"/>
        </div>
     );
}
 
export default Home;