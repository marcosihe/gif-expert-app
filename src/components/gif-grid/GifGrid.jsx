import React from "react";

import GifGridItem from "../gif-grid-item/GifGridItem";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import styles from "./GifGrid.module.scss";
import ImgSkeleton from "../../skeleton/ImgSkeleton";

const GifGrid = (props) => {
  const { category } = props;
  const { data: images, loading } = useFetchGifs(category);

  return (
    <li className={styles.li}>
      <h3 className={styles.title}>{category}</h3>
      {loading ? (
        <ul className={styles.ul}>
          {Array.from(new Array(5)).map((item) => (
            <ImgSkeleton key={item} />
          ))}
        </ul>
      ) : (
        <ul className={styles.ul}>
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default GifGrid;
