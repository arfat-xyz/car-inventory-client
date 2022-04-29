import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageTitle from "../Hooks/PageTitle";

import ItemCard from "../Shared/ItemCard/ItemCard";
import "./Inventory.css";
const Inventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    axios.get(url).then((response) => {
      setProduct(response.data);
    });
  }, [product]);

  // handling delivered product button
  const handleDeliver = (id) => {
    const newProduct = product;
    newProduct.quantity = product.quantity - 1;
    if (newProduct.quantity >= 0) {
      axios.put(`http://localhost:5000/delivered/${id}`, newProduct);
    } else {
      window.alert("You're out of ammount");
    }
  };

  // handling add quantity button
  const handleAddQuantity = (e) => {
    e.preventDefault();
    const quantity = parseInt(e.target.number.value);
    const newProduct = product;
    newProduct.quantity = product.quantity + quantity;
    axios
      .put(`http://localhost:5000/delivered/${id}`, newProduct)
      .then((res) => console.log(res.data));
  };
  return (
    <div className="inventory-container">
      <PageTitle title="Inventory"></PageTitle>
      <div>
        <ItemCard key={product._id} up={true} product={product}></ItemCard>
        <div className="update-quantity">
          <div
            className="deliver-btn"
            onClick={() => handleDeliver(product._id)}
          >
            <span>Delivered</span>
          </div>
          <div className="form-add-quantity">
            <form action="" onSubmit={handleAddQuantity}>
              <label htmlFor="number">Add new quantity</label>
              <input type="number" name="number" id="" required />
              <input type="submit" value="Add" />
            </form>
          </div>
        </div>
      </div>
      +
    </div>
  );
};

export default Inventory;
