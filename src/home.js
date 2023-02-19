import { useEffect, useState } from "react";
import './index.css';
import BlogList from "./BlogList";

const Home = () => {
    const[blogs, setBlogs] = useState([
        {title: "My new website", body: "Bruh", author: "Jerp", id: 1},
        {title: "I like hot dogs", body: "hot dogs re my favorite", author: "Devin", id: 2},
        {title: "My new ", body: "Bruh", author: "Seven", id: 3},
    ]);

    const [name, setName] = useState("Devin");

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
        
    }

    useEffect(() => {
        console.log("Use effect ran")
        console.log(blogs)
    }, [name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title ="All Messages" handleDelete={handleDelete}/>
        <button onClick ={() => setName("Cheeseball")}>Change Name</button>
        {name}
        </div>
     );
}
 
export default Home;