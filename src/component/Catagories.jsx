import React from "react";

const Catagories = ({ catagory, filterItems }) => {
  return (
    <div className="btn-container">
      {catagory.map((category, index) => {
        return (
          <button
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Catagories;
