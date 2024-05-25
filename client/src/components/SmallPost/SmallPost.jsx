import React from "react";
import { Link } from "react-router-dom";

const SmallPost = (props) => {
  return (
    <div className='card mb-3' key={props.id}>
      <div className='card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <p className='card-subtitle text-muted mb-2'>Posted on: {props.date}</p>
        <p className='card-text'>
          Likes: {props.likes} | Comments: {props.comments}
        </p>
        <Link to={`/posts/${props.id}`} className='btn btn-success btn-sm'>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default SmallPost;
