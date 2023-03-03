import React, { useContext } from "react";
import { IconButton } from "../../atoms/IconButton";
import { Delete } from "@mui/icons-material";
import styled from "@emotion/styled";
import Chip from "@mui/material/Chip";
import { AuthContext } from "../../../hooks/AuthContext";
// import { useDeleteReview } from "../../api/mutations/useDeleteReview";

const StyledVideoCommentsAndRepliesActions = styled("div")(({ theme }) => ({
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    maxWidth: 300,
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: 800,
  },
  color: "rgba(41, 41, 41, 1)",
  fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
  fontWeight: 200,
  lineHeight: 10,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "end",
}));

export const VideoCommentsAndRepliesActions = ({
  setshowReplyIdButton,
  id,
  showReplyIdButton,
  username: bodyUsername,
  videoId,
}) => {
  const { username } = useContext(AuthContext);
  // const { mutate } = useDeleteReview(videoId);
  // const onDeleteReviewHandler = () => {
  //   mutate(id);
  // };
  return (
    <StyledVideoCommentsAndRepliesActions>
      {!showReplyIdButton ? (
        <Chip
          label={`Reply`}
          variant="outlined"
          onClick={() => setshowReplyIdButton(id)}
          color="primary"
          sx={{
            display: "flex",
            color: "rgba(41, 41, 41, 1)",
            fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
            fontWeight: 200,
            marginTop: 2,
            marginInline: 2,
            width: 100,
            border: 0,
          }}
        />
      ) : showReplyIdButton === id ? (
        <Chip
          label={`Cancel`}
          variant="outlined"
          onClick={() => setshowReplyIdButton(null)}
          color="primary"
          sx={{
            display: "flex",
            color: "rgba(41, 41, 41, 1)",
            fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
            fontWeight: 200,
            marginTop: 2,
            marginInline: 2,
            width: 100,
            border: 0,
          }}
        />
      ) : (
        <Chip
          label={`Reply`}
          variant="outlined"
          onClick={() => setshowReplyIdButton(null)}
          color="primary"
          sx={{
            display: "flex",
            color: "rgba(41, 41, 41, 1)",
            fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
            fontWeight: 200,
            marginTop: 2,
            marginInline: 2,
            width: 100,
            border: 0,
          }}
        />
      )}
      {username === bodyUsername && (
        <IconButton
        // onClick={onDeleteReviewHandler}
        >
          <Delete fontSize="small" />
        </IconButton>
      )}
    </StyledVideoCommentsAndRepliesActions>
  );
};
