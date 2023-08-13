import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const[name, setName] = useState('Mario');
    const[age, setAge] = useState(25);
    const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const handleClick = (name) => {
        setName('Luigi');
        setAge(30);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <BlogList blogs={blogs} title="All blogs" />
            <p>{ name } is { age } years old.</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;