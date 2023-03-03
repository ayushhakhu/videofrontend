import styled from "@emotion/styled";
import React, { useState } from "react";
import { VideoCommentsRepliesActionHandlers } from "./VideoCommentsRepliesActionHandlers";
import { VideoCommentsAndRepliesActions } from "./VideoCommentsAndRepliesActions";
import { Typography } from "../../atoms/Typography";
import { Box } from "@mui/material";
import { AddCommentField } from "../AddCommentField";

const StyledCommentDetails = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  width: 700,
}));

const StyledCommentsUsername = styled(Typography)(() => ({
  paddingInline: 15,
  fontFamily: "Roboto,Arial, sans-serif",
  fontSize: 13,
  fontWeight: 600,
  marginBottom: 2,
  width: "inherit",
}));

const StyledCommentsAndReplies = styled(Typography)(({ theme }) => ({
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    maxWidth: 300,
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: 800,
  },
  overflowWrap: "break-word",
  fontSize: 14,
  color: "rgba(41, 41, 41, 1)",
  fontFamily: `Roboto, Helvetica, Arial, sans-serif`,
  fontWeight: 400,
  paddingInline: 18,
  marginTop: 10,
  width: "inherit",
}));

export const VideoCommentItem = ({
  firstName,
  lastName,
  blogReview,
  _id,
  username,
  videoId,
  reviewCommentsCount,
  props,
}) => {
  const [showReplyIdButton, setshowReplyIdButton] = useState(null);

  return (
    <StyledCommentDetails {...props}>
      <StyledCommentsUsername variant="h6">
        {`${firstName} ${lastName}`}
      </StyledCommentsUsername>
      <StyledCommentsAndReplies variant="body1">
        {blogReview}
      </StyledCommentsAndReplies>
      <VideoCommentsAndRepliesActions
        setshowReplyIdButton={setshowReplyIdButton}
        showReplyIdButton={showReplyIdButton}
        id={_id}
        username={username}
        videoId={videoId}
      />
      {showReplyIdButton === _id && (
        <AddCommentField
          reviewId={showReplyIdButton}
          videoId={videoId}
          label="Reply"
          // isPostBlogReviewCommentSucess={isPostBlogReviewCommentSucess}
          // isPostBlogReviewCommentError={isPostBlogReviewCommentError}
          placeholder="Add a reply..."
          // onSucessClick={postBlogReviewCommentsMethod}
        />
      )}
      {reviewCommentsCount > 0 && (
        <VideoCommentsRepliesActionHandlers
          id={_id}
          reviewCommentsCount={reviewCommentsCount}
          bodyUsername={username}
        />
      )}
    </StyledCommentDetails>
  );
};
