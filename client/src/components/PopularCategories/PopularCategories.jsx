import React from "react";

const PopularCategories = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>Popular categories</h5>
        <ul className='list-unstyled'>
          <li>
            <a href='#'>Category 1</a>
          </li>
          <li>
            <a href='#'>Category 2</a>
          </li>
          <li>
            <a href='#'>Category 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PopularCategories;
