import React from 'react';

import BackButton from '../utility/BackButton';

function ItemsForm({ history, handleSubmit, handleChange, item }) {
  return (
    <div className="row">
      <div className="page-banner col-md-12">
        <BackButton history={history} />
      </div>
      <form onSubmit={handleSubmit} className="col-md-6">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={item.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={item.price}
            onChange={handleChange}
          />
        </div>


        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            className="form-control"
            id="category"
            name="category"
            value={item.category}
            onChange={handleChange}
          >
            <option value="" disabled>Please Select</option>
            <option>Tops</option>
            <option>Dresses</option>
            <option>Skirts</option>
            <option>Trousers</option>
            <option>Jeans</option>
            <option>Jackets</option>
            <option>Coats</option>
            <option>Shoes</option>
            <option>Bags</option>
            <option>Other accessories</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            name="description"
            maxLength="1000"
            value={item.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={item.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="save-button">Save</button>
        </div>
      </form>
    </div>
  );
}

export default ItemsForm;
