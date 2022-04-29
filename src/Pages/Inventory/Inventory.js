import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  }, []);

  return (
    <div className="inventory-container">
      <PageTitle title="Inventory"></PageTitle>
      <ItemCard key={product._id} up={true} product={product}></ItemCard>
    </div>
  );
};

export default Inventory;
