import React, { useMemo, useState } from "react";
// import { UserDetails } from "../organisms/UserDetails";
import { Grid, Box, Typography, Avatar } from "@mui/material";
import { useParams } from "react-router-dom";
import { AppBar } from "../organisms/AppBar";
// import { useFetchBlog } from "../../api/queries/useFetchBlog";
import { Drawer } from "../organisms/Drawer";
import { VideoComments } from "../molecules/VideoCommentsSection/VideoComments";
import ReactPlayer from "react-player";
import { VideoDetailsItem } from "../molecules/VideoCommentsSection/VideoDetailsItem";
import styled from "@emotion/styled";
import { RelatedVideos } from "../organisms/RelatedVideos";

const data = {
  imagePath: "AYUSHHAKHU.jpg",
  description:
    "The Sad Truth about India | How India lost Billions to South Korea | Patriotism",
  details: "World Affairs",
};

const StyledGridItem = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginInline: 15,
  },
  [theme.breakpoints.up("md")]: {
    marginInline: 70,
  },
}));

const VideoDetailsPage = ({ props }) => {
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
      <StyledGridItem>
        <Grid container>
          <Grid item xs={8} sm={8} md={8} lg={8} xxl={8}>
            <ReactPlayer
              style={{ marginTop: 20, marginLeft: 0 }}
              width={800}
              height={450}
              controls
              pip
              fallback={<>Loading Video..</>}
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
            <VideoDetailsItem
              description={data.description}
              details={data.details}
            />
            <VideoComments videoId={videoId} />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xxl={4}>
            <RelatedVideos />
          </Grid>
        </Grid>
      </StyledGridItem>
    </>
  );
};

export default VideoDetailsPage;
