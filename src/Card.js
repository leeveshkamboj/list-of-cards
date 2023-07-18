import React from "react";

import styles from "./Card.module.css";
import brokenImg from "./no_img.png";

export default function Card({ description, image }) {
  const handleImgError = (event) => {
    event.target.src = brokenImg;
  };
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt="Error" onError={handleImgError} />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
