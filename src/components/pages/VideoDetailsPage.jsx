import React, { useMemo, useState } from "react";
// import { UserDetails } from "../organisms/UserDetails";
import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { AppBar } from "../organisms/AppBar";
// import { useFetchBlog } from "../../api/queries/useFetchBlog";
import { Drawer } from "../organisms/Drawer";
// import { BlogComments } from "../organisms/BlogCommentsSection/BlogComments";
import ReactPlayer from "react-player";

const VideoDetailsPage = (props) => {
  let params = useParams();

  const { videoId } = params;

  console.log("videoId~~~~~~~~~~>", videoId);

  // const { data, isSuccess, isError, isLoading } = useFetchBlog(blogId);

  // const memoMizedData = useMemo(() => data?.data, [data]);

  const [open, setOpen] = useState(false);

  const toggleDrawerState = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar onButtonClick={toggleDrawerState} />
      <Drawer
        showDrawer={false}
        variant="temporary"
        state={open}
        onClose={toggleDrawerState}
      />
      <Grid container>
        <Grid
          item
          sx={{ marginInline: 8 }}
          xs={open ? 10 : 11}
          sm={open ? 10 : 11}
          lg={open ? 10 : 11}
          md={open ? 10 : 11}
          xxl={open ? 10 : 11}
        >
          <ReactPlayer
            style={{ marginTop: 20, marginLeft: 5 }}
            width={800}
            height={450}
            controls
            pip
            fallback={<>Loading Video..</>}
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default VideoDetailsPage;
