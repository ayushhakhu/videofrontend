import { Grid } from "@mui/material";
import React from "react";
import { CardItem } from "../molecules/CardItem";

export const CardsData = ({ ...props }) => {
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
  return (
    <Grid container marginTop={5} columnGap={8} rowGap={5}>
      {data.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={index}>
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
