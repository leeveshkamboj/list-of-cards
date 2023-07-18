import React from "react";

import styles from "./List.module.css";
import Card from "./Card";

function List({ items }) {
  return (
    <div className={styles.list}>
      {items.map((el) => (
        <Card key={el.id} description={el.description} image={el.image} />
      ))}
    </div>
  );
}

export default List;
