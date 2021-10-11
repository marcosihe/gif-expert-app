import React, { useState } from "react";

import AddCategory from "../addCategory/AddCategory";
import GifGrid from "../gif-grid/GifGrid";
import styles from "./GifExpertApp.module.scss";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Los simpsons",
  ]);

  return (
    <section className={styles.container}>
      <AddCategory setCategories={setCategories} />
      <ul className={styles.ul}>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ul>
    </section>
  );
};

export default GifExpertApp;
