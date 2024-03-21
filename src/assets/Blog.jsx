import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import BlogDetails from './BlogDetails';
// import { useNavigate } from 'react-router-dom';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(5); // Adjust this number as needed

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

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="content">
        <h1>All Blogs</h1>
        <h1>All Blogs</h1>
      </div>
   
      {selectedBlog ? (
        <BlogDetails blog={selectedBlog} />
      ) : (
        <div className="blog-container">
          {currentBlogs.map((blog) => (
            <div className="blog-card" key={blog._id} onClick={() => handleBlogClick(blog)}>
              {blog.image && <img src={blog.image} alt={blog.title} />}
              <h2>{blog.title}</h2>
              <p className="des">{blog.description.slice(0, 50)}</p>
              <p className="con">{blog.content.slice(0, 50)}</p>
            </div>
          ))}
        </div>
      )}
      <div className="pagination-container">
      <ul className="pagination">
        {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, i) => (
          <li key={i} className={currentPage === i + 1 ? 'active' : ''}>
            <button onClick={() => paginate(i + 1)}>{i + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
}

export default Blog;
