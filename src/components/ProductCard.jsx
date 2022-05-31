import React from "react";
import styles from "../styles/Product.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  // console.log(item);

  const fiveStar = (
    <div>
      <FaStar size={25} />
      <FaStar size={25} />
      <FaStar size={25} />
      <FaStar size={25} />
      <FaStar size={25} />
    </div>
  );

  const fourStar = (
    <div>
      <FaStar size={25} />
      <FaStar size={25} />
      <FaStar size={25} />
      <FaStar size={25} />
      <FaRegStar size={25} />
    </div>
  );
  const threeStar = (
    <div>
      <FaStar size={25} />
      <FaStar size={25} />
      <FaStar size={25} />
      <FaRegStar size={25} />
      <FaRegStar size={25} />
    </div>
  );

  return (
    <Link to={`/${item.id}`} state={item}>
      <div className={styles.product_card}>
        {item.bestPrice === true ? (
          <div className={styles.best}>best Price</div>
        ) : (
          ""
        )}
        <div className={styles.product_img}>
          <img src={item.image} alt="" />
        </div>
        <div className={styles.product_text}>
          <h3>{item.name} </h3>
          <h2>&#8373;{item.price}</h2>
          <p>
            {item.rating === 3 ? threeStar : ""}
            {item.rating === 4 ? fourStar : ""}
            {item.rating === 5 ? fiveStar : ""}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
