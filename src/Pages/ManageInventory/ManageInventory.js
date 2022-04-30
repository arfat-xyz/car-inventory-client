import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import PageTitle from "../Hooks/PageTitle";
import ItemCard from "../Shared/ItemCard/ItemCard";
import "./ManageInventory.css";
const ManageInventory = () => {
  const [user, loading] = useAuthState(auth);

  const email = user?.email;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://boiling-oasis-56401.herokuapp.com/products?email=${email}`,
        {
          headers: {
            auth: `bearer ${localStorage.getItem("accesstoken")}`,
          },
        }
      )
      .then((res) => setProducts(res.data));
  }, []);
  const dlt = true;
  const handleDelete = async (id) => {
    const proceed = window.confirm("Are you Sure You want to delete this");
    if (proceed) {
      await axios
        .delete(`https://boiling-oasis-56401.herokuapp.com/product/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            const remaining = products.filter((product) => product._id != id);
            setProducts(remaining);
          }
        });
    }
  };
  return (
    <div>
      <PageTitle title="Manage"></PageTitle>
      <section>
        <h1 className="section-header">All Products {products.length}</h1>
        <div className="items-container">
          {products.map((product) => (
            <ItemCard
              key={product._id}
              handleDelete={handleDelete}
              dlt={dlt}
              product={product}
            ></ItemCard>
          ))}
        </div>
        <div style={{ textAlign: "Center", margin: "40px" }}>
          <Link className="add-item-btn" to="/add">
            Add Item
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ManageInventory;
