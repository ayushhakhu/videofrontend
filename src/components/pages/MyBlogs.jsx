import React from "react";
import { MyBlogsList } from "../organisms/MyBlogsList";
import { Grid } from "@mui/material";
import { AppBar } from "../organisms/AppBar";
import { useParams } from "react-router-dom";

const MyBlogs = () => {
  const { userName } = useParams();

  return (
    <>
      <AppBar />
      <Grid container>
        <Grid item lg={12} xxl={12} md={12} sm={12} xs={12}>
          <MyBlogsList username={userName} />
        </Grid>
      </Grid>
    </>
  );
};

export default MyBlogs;
