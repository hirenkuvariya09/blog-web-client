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
            <div class="face front"><img src="./html.png"  alt="" />Html</div>
            <div class="face back"><img src="./mongodb.png"  alt="" />mongodb</div>
            <div class="face right"><img src="./react.png"  alt="" />React JS</div>
            <div class="face left"><img src="./javascript.png"  alt="" />JavaScript</div>
            <div class="face top"><img src="./node.png"  alt="" />Node JS</div>
            <div class="face bottom"> <img src="./nextjs.png"  alt="" />Next JS</div>
          </div>
        </div>
      </div>


      <section class="do_section layout_padding">
    <div class="container">
    <div class="heading_container">
        <h2>
          we are provide 
        </h2>
        <p>
            
        </p>
      </div>
      <div class="do_container">
        <div class="box arrow-start arrow_bg">
          <div class="img-box">
            <img src="./d-1.png" alt=""/>
          </div>
          <div class="detail-box">
            <h6>
              designing
            </h6>
          </div>
        </div>
        <div class="box arrow-middle arrow_bg">
          <div class="img-box">
            <img src="./d-2.png" alt=""/>
          </div>
          <div class="detail-box">
            <h6>
              Development
            </h6>
          </div>
        </div>
        <div class="box arrow-middle arrow_bg">
          <div class="img-box">
            <img src="./d-3.png" alt=""/>
          </div>
          <div class="detail-box">
            <h6>
              Html5
            </h6>
          </div>
        </div>
        <div class="box arrow-end arrow_bg">
          <div class="img-box">
            <img src="./d-4.png" alt=""/>
          </div>
          <div class="detail-box">
            <h6>
              Css
            </h6>
          </div>
        </div>
        
      </div>
    </div>
  </section>


     



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

      <div className='bgimg'>
        <img src="./map_dark_image.png" id='ig' alt="" />
      </div>



    </div>
  );
}

export default Home;
