import React from "react";
import ProductCard from "./ProductCard";
import Data from "../data/data.json";
import styles from "../styles/Product.module.css";

const Products = () => {
    const products = Data.products
  return (
    <div className={styles.product_container}>
     {products.map((item, idx) => (
         <ProductCard item={item} key={idx}/>
     ))}
    </div>
  );
};

export default Products;
