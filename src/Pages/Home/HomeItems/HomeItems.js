import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemCard from "../../Shared/ItemCard/ItemCard";
import "./HomeItems.css";
const HomeItems = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("cars.json").then((res) => setProducts(res.data.slice(0, 6)));
  }, []);
  return (
    <div>
      <h1 className="section-header">First 6 Item</h1>
      <div className="items-container">
        {products.map((product) => (
          <ItemCard key={product._id} product={product}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default HomeItems;
