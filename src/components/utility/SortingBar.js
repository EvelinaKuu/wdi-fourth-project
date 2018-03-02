import React from 'react';


const SortingBar = ({ handleSort, handleSearch }) => {

  return(
    <div className="columns">
      <div className="column">
        <div className="control select">
          <select
            onChange={handleSort}
          >
            <option value="price|asc">Price (Low - High)</option>
            <option value="price|desc">Price (High - Low)</option>
          </select>
        </div>
        <div className="control select">
          <select
            onChange={handleSearch}
          >
            <option value="">Order by category</option>
            <option value="tops">Tops</option>
            <option value="dresses">Dresses</option>
            <option value="skirts">Skirts</option>
            <option value="trousers">Trousers</option>
            <option value="jeans">Jeans</option>
            <option value="jackets">Jackets</option>
            <option value="coats">Coats</option>
            <option value="shoes">Shoes</option>
            <option value="bags">Bags</option>
            <option value="other-accessories">Other accessories</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortingBar;
