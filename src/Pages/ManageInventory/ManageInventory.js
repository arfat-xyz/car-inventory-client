import axios from "axios";
import React, { useEffect, useState } from "react";
import PageTitle from "../Hooks/PageTitle";
import ItemCard from "../Shared/ItemCard/ItemCard";
import "./ManageInventory.css";
const ManageInventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://boiling-oasis-56401.herokuapp.com/products")
      .then((res) => setProducts(res.data));
  }, []);
  const dlt = true;
  return (
    <div>
      <PageTitle title="Manage"></PageTitle>
      <section>
        <h1 className="section-header">All Products {products.length}</h1>
        <div className="items-container">
          {products.map((product) => (
            <ItemCard key={product._id} dlt={dlt} product={product}></ItemCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ManageInventory;
