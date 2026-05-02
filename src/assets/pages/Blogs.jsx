import React from "react";
import { blogsData } from "../data/blogsData";
import "../styles/Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-section">
      <div className="section-header">
        <h2>Latest Blog Posts</h2>
        <div className="header-line"></div>
      </div>

      <div className="blogs-container">
        {blogsData.map((blog) => (
          <a key={blog.id} href={blog.link} className="blog-card">
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />
              <div className="blog-category">{blog.category}</div>
            </div>

            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>

              <div className="blog-meta">
                <span className="read-time">📖 {blog.readTime}</span>
                <span className="date">
                  📅 {new Date(blog.date).toLocaleDateString()}
                </span>
              </div>

              <div className="blog-tags">
                {blog.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
