import React, { useState } from "react";
import { Link } from "react-router-dom";

const PostPage = () => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Comment:", comment);
    setComment("");
  };

  return (
    <section className='container mt-4' style={{ marginBottom: "100px" }}>
      <div className='row'>
        <div className='col-lg-8'>
          <div className='card mb-3'>
            <div className='card-body'>
              <h3 className='card-title'>Full Post Title</h3>
              <p className='card-subtitle text-muted mb-2'>
                Posted by: Some Guy | Date: February 11, 2024
              </p>
              <p className='card-text'>
                This is the full content of the post. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Proin euismod, metus vel
                hendrerit ultricies, velit sapien eleifend mauris, eu feugiat ex
                lorem sit amet lectus.
              </p>
              <div className='d-flex flex-wrap mb-2'>
                <span className='badge badge-light mr-2 text-bg-dark rounded-pill hoverable'>
                  Category 1
                </span>
                <span className='badge badge-light mr-2 text-bg-dark rounded-pill hoverable'>
                  Category 2
                </span>
                <span className='badge badge-light mr-2 text-bg-dark rounded-pill hoverable'>
                  Category 3
                </span>
              </div>
              <div className='d-flex justify-content-between align-items-center mt-auto'>
                <div className='d-flex gap-2'>
                  <button className='btn btn-success mr-2'>
                    <i className='fas fa-thumbs-up mr-2'></i>10
                  </button>
                  <button className='btn btn-info'>
                    <i className='fas fa-comment mr-2'></i>5
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='card mb-3'>
            <div className='card-body'>
              <h4 className='mb-3'>Comments</h4>
              <ul className='list-unstyled'>
                <li>
                  <strong>Commenter 1:</strong> Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </li>
                <li>
                  <strong>Commenter 2:</strong> Sed cursus ante dapibus diam.
                  Sed nisi.
                </li>
              </ul>
            </div>
          </div>
          <div className='card mb-3'>
            <div className='card-body'>
              <h4 className='mb-3'>Add a Comment</h4>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='comment'>Your Comment</label>
                  <textarea
                    className='form-control'
                    id='comment'
                    rows='3'
                    placeholder='Enter your comment'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>
                <button type='submit' className='btn btn-success'>
                  Add Comment
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className='col-lg-4'>
          <div className='card mb-3'>
            <div className='card-body'>
              <h4 className='mb-3'>Related Posts</h4>
              <ul className='list-unstyled'>
                <li>
                  <Link to='/posts/related-post-1'>Related Post 1</Link>
                </li>
                <li>
                  <Link to='/posts/related-post-2'>Related Post 2</Link>
                </li>
                <li>
                  <Link to='/posts/related-post-3'>Related Post 3</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostPage;
