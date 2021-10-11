import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const ImgSkeleton = () => {

  return (
      <Box sx={{ width: 220, marginRight: 0.5, my: 5 }}>
        <Skeleton variant="rectangular" width={220} height={118} />
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </Box>
  );
};

export default ImgSkeleton;
