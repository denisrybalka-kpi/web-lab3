import React, { useState } from "react";
import { createPost } from "../utils/requests";
import { useMutation } from "react-query";
import { useUser } from "../context/user";

const CreatePostModal = ({ opened, onClose }) => {
  const { user } = useUser();

  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [categories, setCategories] = useState("");

  const { mutate, isError } = useMutation(createPost, {
    onSuccess: () => {
      onClose();
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const postData = {
      title: postTitle,
      content: postContent,
      categories: categories.split(",").map((item) => item.trim()),
      author_id: user.id,
    };

    mutate(postData);
  };

  return (
    opened && (
      <div className='modal-overlay'>
        <div className='modal show' tabIndex='-1' style={{ display: "block" }}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>Create a New Post</h5>
                <button type='button' className='close' onClick={onClose}>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <form onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <label htmlFor='postTitle'>Title</label>
                    <input
                      type='text'
                      className='form-control'
                      id='postTitle'
                      placeholder='Enter post title'
                      required
                      value={postTitle}
                      onChange={(e) => setPostTitle(e.target.value)}
                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='postContent'>Content</label>
                    <textarea
                      className='form-control'
                      id='postContent'
                      rows='4'
                      placeholder='Enter post content'
                      required
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
                    ></textarea>
                  </div>

                  <div className='form-group'>
                    <label htmlFor='postCategories'>
                      Categories (comma-separated)
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='postCategories'
                      placeholder='Enter categories'
                      required
                      value={categories}
                      onChange={(e) => setCategories(e.target.value)}
                    />
                  </div>

                  {isError && <p className='text-danger'>{isError}</p>}

                  <div className='modal-footer'>
                    <button
                      type='button'
                      className='btn btn-secondary'
                      onClick={onClose}
                    >
                      Close
                    </button>
                    <button type='submit' className='btn btn-success'>
                      Create Post
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CreatePostModal;
