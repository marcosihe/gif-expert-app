import React from "react";
import Card from "@mui/material/Card";
import {
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import styles from "./GifGridItem.module.scss";

const GifGridItem = (props) => {
  const { title, url } = props;

  return (
    <li className={styles.li}>
      <Card className={styles.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={url}
            alt={title}
            className={styles.imgCard}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </li>
  );
};

export default GifGridItem;
