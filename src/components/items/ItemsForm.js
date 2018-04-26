import React from 'react';

import BackButton from '../utility/BackButton';

function ItemsForm({ handleSubmit, handleChange, item, errors }) {
  const formIsInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <div>
      <div>
        <BackButton />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="title" className="label">Title</label>
          <input
            type="text"
            className="input"
            id="title"
            name="title"
            value={item.title}
            onChange={handleChange}
          />
          {errors.title && <small>{errors.title}</small>}
        </div>
        <div className="field">
          <label htmlFor="price" className="label">Price</label>
          <input
            type="number"
            className="input"
            id="price"
            name="price"
            value={item.price}
            onChange={handleChange}
          />
          {errors.price && <small>{errors.price}</small>}
        </div>
        <div className="field">
          <label className="label" htmlFor="category" >Category</label>
          <div className="control select">
            <select
              id="category"
              name="category"
              defaultValue="Please Select"
              onChange={handleChange}
            >
              <option disabled value="Please Select">Please select</option>
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
            {errors.category && <small>{errors.category}</small>}
          </div>
        </div>
        <div className="field">
          <label htmlFor="description" className="label">Description</label>
          <textarea
            type="text"
            className="textarea"
            id="description"
            name="description"
            maxLength="1000"
            value={item.description}
            onChange={handleChange}
          >
          </textarea>
          {errors.description && <small>{errors.description}</small>}
        </div>
        <div className="field">
          <label htmlFor="image" className="label">Image</label>
          <input
            type="text"
            className="input"
            id="image"
            name="image"
            value={item.image}
            onChange={handleChange}
          />
          {errors.image && <small>{errors.image}</small>}
        </div>
        <div>
          <button className="button is-white" disabled={formIsInvalid}>Save</button>
        </div>
      </form>
    </div>
  );
}

export default ItemsForm;
