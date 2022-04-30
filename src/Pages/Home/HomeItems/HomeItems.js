import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../Loading/Loading";
import ItemCard from "../../Shared/ItemCard/ItemCard";
import "./HomeItems.css";
const HomeItems = () => {
  const [products, setProducts] = useState([]);

  //
  useEffect(() => {
    axios
      .get("https://boiling-oasis-56401.herokuapp.com/products")
      .then((res) => setProducts(res.data.slice(0, 6)));
  }, []);

  return (
    <div>
      <h1 className="section-header">First {products.length} Item</h1>
      <div className="items-container">
        {products.map((product) => (
          <ItemCard key={product._id} product={product}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default HomeItems;
