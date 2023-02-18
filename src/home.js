import { useState } from "react";
import './index.css';
import BlogList from "./BlogList";

const Home = () => {
    const[blogs, setBlogs] = useState([
        {title: "My new website", body: "Bruh", author: "Jerp", id: 1},
        {title: "I like hot dogs", body: "hot dogs re my favorite", author: "Devin", id: 2},
        {title: "My new ", body: "Bruh", author: "Seven", id: 3},
    ]);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
        console.log(newBlogs)
    }
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title ="All Messages" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;