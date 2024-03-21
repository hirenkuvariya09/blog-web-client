import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Home.css';
import BlogDetails from './BlogDetails';

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const maxBlogsToShow = 3; // Maximum number of blogs to display initially

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/blogs");
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className='main2'>
        <div className='avtar'>
          <img src="./pngtree-3d-character-illustrator-work-on-table-and-laptop-png-image_11596148.png" id='ig1' alt="" />
        </div>
        <div class="cube-container">
          <div class="cube">
            <div class="face front">Html</div>
            <div class="face back">Css</div>
            <div class="face right">React JS</div>
            <div class="face left">JavaScript</div>
            <div class="face top">Node JS</div>
            <div class="face bottom">mongoDB</div>
          </div>
        </div>
      </div>

      <div className='bgimg'>
        <img src="./map_dark_image.png" id='ig' alt="" />
      </div>



      <div className="content">
        <h1>Blogs</h1>
        <h1>Blogs</h1>
      </div>
      <div className="blog-container">
        {blogs.slice(0, maxBlogsToShow).map(blog => (
          <div className="blog-card" key={blog._id} >
            {blog.image && <img src={blog.image} alt={blog.title} />}
            <h2>{blog.title}</h2>
            <p className='des'>{blog.description.slice(0, 50)}</p>
            <p className='con'>{blog.content.slice(0, 50)}</p>
          </div>
        ))}
      </div>

      <div className='viewmain'>
      {blogs.length > maxBlogsToShow && (
        <Link to="/blog" className="view-more" >View More..</Link>
      )}

      {selectedBlog && <BlogDetails blog={selectedBlog} />}
      </div>
    </div>
  );
}

export default Home;
