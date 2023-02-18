import { useState } from "react";
import './index.css';
import BlogList from "./BlogList";

const Home = () => {
    const[blogs, setBlogs] = useState([
        {title: "My new website", body: "Bruh", author: "Devin", id: 1},
        {title: "I like hot dogs", body: "hot dogs re my favorite", author: "Devin", id: 2},
        {title: "My new ", body: "Bruh", author: "Devin", id: 3},
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs}title ="All Messages"/>
        </div>
     );
}
 
export default Home;