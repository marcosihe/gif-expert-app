import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import styles from "./GifGridItem.module.scss";

const GifGridItem = (props) => {
  const { title, url } = props;

  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        image={url}
        alt={`Imagen animada de ${title}`}
        className={styles.img}
      />
      <CardContent className={styles.cardContent}>
        <Typography variant="h5" component="h5" sx={{ fontSize: 16 }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GifGridItem;
