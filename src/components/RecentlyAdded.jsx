import SingleMovie from "./SingleMovie";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
const RecentlyAdded = (props) => {
  const [products, setProducts] = useState([]);
  console.log(products);
  console.log(products[0]);
  useEffect(() => {
    console.log("useeffect triggered");
    async function fetchProducts() {
      const apiUrl = process.env.REACT_APP_BE;
      const resp = await fetch(`${apiUrl}/medias`);
      const data = await resp.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Movie fetched by me</h1>
      {products.map((movie, i) => (
        <SingleMovie movie={movie} key={i} />
      ))}
    </div>
  );
};

export default RecentlyAdded;
