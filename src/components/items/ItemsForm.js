import React from 'react';

import BackButton from '../utility/BackButton';

function ItemsForm({ handleSubmit, handleChange, item }) {
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
        </div>
        <div className="field">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="input"
            id="price"
            name="price"
            value={item.price}
            onChange={handleChange}
          />
        </div>

        <div className="field">
                  <label className="label" htmlFor="category" >Category</label>
                  <div className="control select">
                    <select
                      id="category"
                      name="category"
                      value={item.category}
                      defaultValue="Please Select"
                      onChange={handleChange}
                    >
                      <option disabled value="Please Select">Please select</option>
                      <option value="tops">Tops</option>
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
                </div>


          <div className="field">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              className="message"
              id="description"
              name="description"
              maxLength="1000"
              value={item.description}
              onChange={handleChange}
            >
            </textarea>
          </div>
          <div className="field">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              className="input"
              id="image"
              name="image"
              value={item.image}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="save-button">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ItemsForm;
