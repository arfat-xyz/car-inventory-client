import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import PageTitle from "../Hooks/PageTitle";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";
import "./AddItem.css";
const AddItem = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleAddItem = async (e) => {
    e.preventDefault();
    const suplier = e.target.name.value;
    const email = e.target.email.value;
    const p_name = e.target.p_name.value;
    const img = e.target.img.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const product = {
      name: p_name,
      email,
      img,
      description,
      price,
      quantity,
      suplier,
    };
    await axios
      .post("https://car-inventory-server.onrender.com/additem", product)
      .then(function (res) {
        if (res?.data?.insertedId) {
          navigate("/myitem");
        }
      });
  };
  return (
    <div className="add-main-container">
      <PageTitle title="Add Item" />
      <div className="add-container">
        <form action="" onSubmit={handleAddItem}>
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id=""
              value={user.displayName}
              required
              readOnly
              disabled
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              id=""
              placeholder="Please enter your email"
              required
              readOnly
              disabled
            />
          </div>
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
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              placeholder="Please enter product description"
              required
            ></textarea>
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
