import { Grid } from "@mui/material";
import React from "react";
import { CardItem } from "../molecules/CardItem";

const data = [
  {
    imagePath: "AYUSHHAKHU.jpg",
    description:
      "One of the big title it was, One of the big title it was, One of the big title it was, One of the big title it was, One of the big title it was",
    details: "One of the best video",
  },
  {
    imagePath: "AYUSHHAKHU.jpg",
    description: "First Video!!",
    details: "One of the best video",
  },
  {
    imagePath: "AYUSHHAKHU.jpg",
    description: "First Video!!",
    details: "One of the best video",
  },
  {
    imagePath: "AYUSHHAKHU.jpg",
    description:
      "One of the big title it was, One of the big title it was, One of the big title it was, One of the big title it was, One of the big title it was",
    details: "One of the best video",
  },
  {
    imagePath: "AYUSHHAKHU.jpg",
    description: "First Video!!",
    details: "One of the best video",
  },
  {
    imagePath: "AYUSHHAKHU.jpg",
    description: "First Video!!",
    details: "One of the best video",
  },
  {
    imagePath: "AYUSHHAKHU.jpg",
    description:
      "One of the big title it was, One of the big title it was, One of the big title it was, One of the big title it was, One of the big title it was",
    details: "One of the best video",
  },
  {
    imagePath: "AYUSHHAKHU.jpg",
    description: "First Video!!",
    details: "One of the best video",
  },
  {
    imagePath: "AYUSHHAKHU.jpg",
    description: "First Video!!",
    details: "One of the best video",
  },
  {
    imagePath: "AYUSHHAKHU.jpg",
    description:
      "One of the big title it was, One of the big title it was, One of the big title it was, One of the big title it was, One of the big title it was",
    details: "One of the best video",
  },
  {
    imagePath: "AYUSHHAKHU.jpg",
    description: "First Video!!",
    details: "One of the best video",
  },
  {
    imagePath: "AYUSHHAKHU.jpg",
    description: "First Video!!",
    details: "One of the best video",
  },
];

export const CardsData = ({ open, ...props }) => {
  return (
    <Grid container marginTop={5} columnGap={8} rowGap={5}>
      {data.map((item, index) => (
        <Grid
          item
          xs={open ? 12 : 11.5}
          sm={open ? 6 : 5.5}
          md={open ? 3 : 2.5}
          lg={open ? 3 : 2.5}
          xl={open ? 3 : 2.5}
          key={index}
        >
          <CardItem
            key={index}
            description={item.description}
            details={item.details}
            imagePath={item.imagePath}
          />
        </Grid>
      ))}
    </Grid>
  );
};
