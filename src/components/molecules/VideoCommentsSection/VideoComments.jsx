import React from "react";
import styled from "@emotion/styled";
import { Paper } from "../Paper";
import { Avatar, Box } from "@mui/material";
import { AddCommentField } from "../AddCommentField";
// import { useFetchBlogReviews } from "../../../api/queries/useFetchBlogReviews";
// import AlertProvider from "../../atoms/AlertProvider";
// import { usePostBlogReview } from "../../../api/mutations/usePostBlogReview";
// import { usePostBlogReviewComments } from "../../../api/mutations/usePostBlogReviewComments";
import { VideoCommentItem } from "./VideoCommentItem";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  paddingBlock: 20,
  borderRadius: 0,
  paddingInline: 0,
  flexDirection: "column",
  width: 800,
}));

const stringAvatar = (name) => {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
};

const StyledCommentsSection = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  marginBlock: 10,
  width: "inherit",
}));

const data = {
  data: [
    {
      user: {
        firstName: "Hello",
        lastName: "World",
        username: "Hello@World",
      },
      blogReview: "Hello ~~~~~~~~~~~~~~~~~~~~~~~~~",
      _id: 111,
      reviewCommentsCount: 1,
    },
    {
      user: {
        firstName: "Hello",
        lastName: "World",
        username: "Hello@World",
      },
      blogReview:
        "Hello ~~~~~~~~~~~~~~~~~~~~~~~~~Hello ~~~~~~~~~~~~~~~~~~~~~~~~~",
      _id: 112,
      reviewCommentsCount: 1,
    },
    {
      user: {
        firstName: "Hello",
        lastName: "World",
        username: "Hello@World",
      },
      blogReview:
        "Hello ~~~~~~~~~~~~~~~~~~~~~~~~~Hello ~~~~~~~~~~~~~~~~~~~~~~~~~Hello ~~~~~~~~~~~~~~~~~~~~~~~~~Hello ~~~~~~~~~~~~~~~~~~~~~~~~~",
      _id: 113,
      reviewCommentsCount: 1,
    },
  ],
};

export const VideoComments = ({ videoId }) => {
  // const { isSuccess, isError, data } = useFetchBlogReviews(blogId);

  // const {
  //   isSuccess: isPostBlogReviewSucess,
  //   isError: isPostBlogReviewError,
  //   mutate: postBlogReviewMethod,
  // } = usePostBlogReview();
  // const {
  //   isSuccess: isPostBlogReviewCommentSucess,
  //   isError: isPostBlogReviewCommentError,
  //   mutate: postBlogReviewCommentsMethod,
  // } = usePostBlogReviewComments();

  // if (isError) {
  //   return (
  //     <AlertProvider severity={"warning"} text="Unable to fetch comments" />
  //   );
  // }

  // if (isSuccess && data?.data.length === 0) {
  //   return (
  //     <StyledPaper elevation={0}>
  //       <Typography variant="body1">No Comments Add a new One</Typography>
  //       <AddCommentField
  //         blogId={blogId}
  //         label="Comment"
  //         placeholder="Add a comment..."
  //         isPostBlogReviewSucess={isPostBlogReviewSucess}
  //         isPostBlogReviewError={isPostBlogReviewError}
  //         onSucessClick={postBlogReviewMethod}
  //       />
  //     </StyledPaper>
  //   );
  // }

  // if (isSuccess && data.data) {
  return (
    <StyledPaper elevation={0}>
      <AddCommentField
        videoId={videoId}
        // isPostBlogReviewSucess={isPostBlogReviewSucess}
        // isPostBlogReviewError={isPostBlogReviewError}
        label="Comment"
        placeholder="Add a comment..."
        // onSucessClick={postBlogReviewMethod}
      />
      {data?.data.map((item, index) => (
        <StyledCommentsSection key={index}>
          <Avatar
            sx={{
              marginBottom: 2,
              width: 40,
              height: 40,
            }}
            alt="username"
            {...stringAvatar(`${item.user.firstName} ${item.user.lastName}`)}
          />
          <VideoCommentItem
            firstName={item?.user?.firstName}
            lastName={item?.user?.lastName}
            username={item?.user?.username}
            blogReview={item?.blogReview}
            _id={item?._id}
            videoId={videoId}
            reviewCommentsCount={item?.reviewCommentsCount}
          />
        </StyledCommentsSection>
      ))}
    </StyledPaper>
  );
  // }
};
