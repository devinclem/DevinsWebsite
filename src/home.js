import { useState } from "react";
import './index.css';


const Home = () => {
    const[blogs, setBlogs] = useState([
        {title: "My new website", body: "Bruh", author: "Devin", id: 1},
        {title: "I like hot dogs", body: "hot dogs re my favorite", author: "Devin", id: 2},
        {title: "My new ", body: "Bruh", author: "Devin", id: 3},
    ]);

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Wirrten by: {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;