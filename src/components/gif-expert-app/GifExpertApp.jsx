import React, { useState } from "react";

import AddCategory from "../addCategory/AddCategory";
import GifGrid from "../gif-grid/GifGrid";
import styles from "./GifExpertApp.module.scss";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Samurai X"]);

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Gif Expert App</h1>
      <AddCategory setCategories={setCategories} />
      <hr className={styles.hr}/>
      <ul className={styles.ul}>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ul>
    </section>
  );
};

export default GifExpertApp;
