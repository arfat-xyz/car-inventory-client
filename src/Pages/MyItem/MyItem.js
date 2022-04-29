import React from "react";
import PageTitle from "../Hooks/PageTitle";
import { GrClose } from "react-icons/gr";
import "./MyItem.css";
const MyItem = () => {
  return (
    <div className="all-products-container">
      <PageTitle title="My Item"></PageTitle>
      <div className="product-container">
        <div className="product-details">
          <strong>Name : </strong> "Tesla Model Y" <br />{" "}
          <strong>Image-link : </strong> :
          "https://i.ibb.co/HtNT49d/tesla-model-y.jpg"
          <br />
          <strong>Description</strong> "description": "Model Y provides maximum
          versatility—able to carry 7 passengers and "
          <br />
          <strong>Price : </strong> "price" : 420000,
          <br /> <strong>Quantity</strong>: 11, <br />
          <strong>Suplier : </strong>: "Arfatur Rahman"
        </div>
        <div className="product-delete">
          <GrClose></GrClose>
        </div>
      </div>
    </div>
  );
};

export default MyItem;
