import React, { useEffect, useState } from "react";
import PageTitle from "../Hooks/PageTitle";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./MyItem.css";
import axios from "axios";
import { async } from "@firebase/util";
import SingleItem from "./SingleItem";
const MyItem = () => {
  const [user, loading, error] = useAuthState(auth);

  const email = user?.email;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const run = async () => {
      await axios
        .get(`http://localhost:5000/myItem/${email}`)
        .then(function (res) {
          setProducts(res.data);
        });
    };
    run();
  }, [email]);
  if (loading) {
    return <h1>please wait</h1>;
  }
  return (
    <div className="all-products-container">
      <PageTitle title="My Item"></PageTitle>
      {products.map((product) => (
        <SingleItem key={product._id} product={product} />
      ))}
    </div>
  );
};

export default MyItem;
