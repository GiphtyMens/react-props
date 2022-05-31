import React from "react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import styles from "../styles/Nav.module.css";
const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <h3 color="rgb(33, 33, 33)">React Props & JS Map Function</h3>
      </div>
      <div className={styles.navbar_icon}>
        <h4>
          <BsFillMenuButtonWideFill size={50} color="rgb(33, 33, 33)"/>
        </h4>
      </div>
    </nav>
  );
};

export default Nav;
