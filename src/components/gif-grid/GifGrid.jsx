import React, { useState, useEffect } from "react";

import GifGridItem from "../gif-grid-item/GifGridItem";
import styles from "./GifGrid.module.scss";

const GifGrid = (props) => {
  const { category } = props;

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const GIF_URL = "api.giphy.com/v1/gifs/search";
    const apiKey = "Ph4pFgWwElK9iwz5toxhaFYs7MPsBZj9";
    const limit = 10;
    const URL = `https://${GIF_URL}?q=${encodeURI(
      category
    )}&limit=${limit}&api_key=${apiKey}`;

    const resp = await fetch(URL);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium?.url,
      };
    });
    setImages(gifs);
  };

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
