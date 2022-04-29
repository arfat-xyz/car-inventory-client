import React from "react";
import { Link } from "react-router-dom";
import "./ItemCard.css";
const ItemCard = ({ product, dlt }) => {
  return (
    <div className="card-container">
      <div className="card-img">
        <img src={product.img} alt="" />
      </div>
      <div className="card-details">
        <h2>{product.name}</h2>
        <p className="card-description">
          <strong>Description :</strong>
          {product.description}
        </p>
        <p className="card-price">
          <strong>Price : </strong>${product.price}
        </p>
        <p className="card-quantity">
          <strong>Quantity</strong> {product.quantity}
        </p>
        <p className="card-supplier">
          <strong>Supplier Name : </strong> {product.suplier}
        </p>
        <p className="card-update-btn">
          <Link to={`/inventory/${product._id}`}>Update</Link>
        </p>
        {dlt && (
          <p className="card-update-btn">
            <Link
              to=""
              onClick={() => {
                console.log("you clicked");
              }}
            >
              Delete
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
