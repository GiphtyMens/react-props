import React from "react";
import Data from "../data/data.json";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header_container}>
      <div className={styles.header_text}>
        <h1>{Data.header.title}</h1>
        <p>{Data.header.paragraph}</p>
      </div>
      <div className={styles.header_image}>
        <img src={Data.header.image} alt="" />
      </div>
    </header>
  );
};

export default Header;
