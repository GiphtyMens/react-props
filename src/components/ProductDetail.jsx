import React from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "../styles/Product.module.css";
import {
  FaCartPlus,
  FaRegHeart,
  FaArrowCircleLeft,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state;
  console.log(product);

  return (
    <div>
      <Link to="/" className={styles.back}>
        <FaArrowCircleLeft />
        <span>BacK</span>
      </Link>
      <div className={styles.detail_container}>
        <div className={styles.detail_card}>
          <div className={styles.detail_image}>
            <img src={product.image} alt="" />
          </div>
        </div>
        <div className={styles.detail_text}>
          <h1>{product.name}</h1>
          <div className={styles.prices}>
            <h3>GH&#8373;{product.price}</h3>
            <h2>GH&#8373;{product.price}</h2>
          </div>
          <h4>*Price per an item</h4>
          <h6>Availability: Only 10pcs left</h6>
          <div className={styles.button}>
            <button className={styles.cart_btn}>
              <FaCartPlus /> Add to Cart
            </button>
            <div className={styles.icon}>
              <button className={styles.icon_btn}>
                <FaRegHeart size={30} />
              </button>
              <button className={styles.icon_btn}>
                <FiSearch size={30} />
              </button>
            </div>
          </div>
          <h5>Description</h5>
          <p>{product.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
