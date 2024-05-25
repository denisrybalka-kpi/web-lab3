import React from "react";

const ShareIdeas = ({ openAddPostModal }) => {
  return (
    <div className='card my-3'>
      <div className='card-body text-center'>
        <h5 className='card-title'>Share Your Ideas</h5>
        <p className='card-text'>Ready to inspire others? Create a post now!</p>
        <button
          type='button'
          className='btn btn-primary btn-block'
          onClick={openAddPostModal}
        >
          Create Post
        </button>
      </div>
    </div>
  );
};

export default ShareIdeas;
