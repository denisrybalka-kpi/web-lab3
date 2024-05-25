import React from "react";

const SearchBar = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <form>
          <div className='input-group'>
            <input
              type='text'
              className='form-control border-1'
              placeholder='Search for posts...'
            />
            <div className='input-group-append'>
              <button className='btn btn-outline-secondary' type='button'>
                <i className='fas fa-search'></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
