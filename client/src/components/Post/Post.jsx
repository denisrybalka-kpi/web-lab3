import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  const { id, title, content, categories = [], author, date } = props;

  return (
    <div className='card mb-3' key={id}>
      <div className='card-body d-flex flex-column'>
        <h3 className='card-title'>{title}</h3>
        <p className='card-subtitle text-muted mb-2'>
          Posted by: {author} | Date: {date}
        </p>
        <p className='card-text'>{content}</p>

        <div className='d-flex flex-wrap mb-2'>
          {categories.map((category) => (
            <span className='badge badge-light mr-2 text-bg-dark rounded-pill hoverable'>
              {category}
            </span>
          ))}
        </div>
        <div className='d-flex justify-content-between align-items-center mt-auto'>
          <Link to='post' className='btn btn-success'>
            Read More
          </Link>
          <div className='d-flex gap-2'>
            <button className='btn btn-success mr-2'>
              <i className='fas fa-thumbs-up mr-2'></i>1
            </button>
            <button className='btn btn-info'>
              <i className='fas fa-comment mr-2'></i>2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
