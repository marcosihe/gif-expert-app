import React, { useState, useEffect } from "react";

import GifGridItem from "../gif-grid-item/GifGridItem";
import styles from "./GifGrid.module.scss";
import { getGifs } from "../../helpers/getGifs";

const GifGrid = (props) => {
  const { category } = props;

  const [images, setImages] = useState([]);

  useEffect(() => {
    // getGifs devuelve una promesa, la cual servirá para settear las images
    getGifs( category )
    .then( setImages )
  }, [ category ]);


  return (
    <li className={styles.li}>
      <h3 className={styles.title}>{category}</h3>
      <ul className={styles.cardsContainer}>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </ul>
    </li>
  );
};

export default GifGrid;
