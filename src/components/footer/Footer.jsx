import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>Design, Developed & Maintained by Palash</div>
      <div className={styles.social}>
        <a href="https://github.com/iamrealpalash/NebulaNote" target="_blank"><p>Give it a Star ⭐ On GitHub</p></a>
      </div>
    </div>
  );
};

export default Footer;
