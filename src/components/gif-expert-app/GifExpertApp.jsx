import React, { useState } from "react";
import AddCategory from "../addCategory/AddCategory";
//import CustomButton from "../button/CustomButton";
import styles from "./GifExpertApp.module.scss";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Samurai X"]);

  return (
    <div>
      <h1 className={styles.title}>Gif Expert App</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
