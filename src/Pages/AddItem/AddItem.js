import React from "react";
import PageTitle from "../Hooks/PageTitle";
import "./AddItem.css";
const AddItem = () => {
  return (
    <div className="add-main-container">
      <PageTitle title="Add Item" />
      <div className="add-container">
        <form action="">
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Please enter your name"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Please enter your email"
              required
            />
          </div>{" "}
          <div className="input-container">
            <label htmlFor="p_name">Product Name</label>
            <input
              type="text"
              name="p_name"
              id=""
              placeholder="Please enter product name"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="img">Image Link</label>
            <input
              type="text"
              name="img"
              id=""
              placeholder="Please enter product image link"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id=""
              placeholder="Please enter product description"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id=""
              placeholder="Please enter product price"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              name="quantity"
              id=""
              placeholder="Please enter product quantity"
              required
            />
          </div>
          <div className="submit-container">
            <input type="submit" value="Add Product" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
