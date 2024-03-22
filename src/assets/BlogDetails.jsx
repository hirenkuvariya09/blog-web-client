import React from 'react';
import './BlogDetails.css';

function BlogDetails({ blog }) {
  return (
    <div className='main'>   
     <div className="content">
          <h1>single Blogs</h1>
          <h1>single Blogs</h1>
        </div>

      <h2 className='blogtitle'>{blog.title}</h2>
      {blog.image && <img className='im' src={blog.image} alt={blog.title} />}
      <h4 className='Blogdes'>{blog.description}</h4>
      <p className='Blogcon'>{blog.content}</p>
    </div>
  );
}

export default BlogDetails;
