import { Box, Stack, Avatar, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledVideoTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Roboto",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
  fontSize: "2 rem",
  fontWeight: 600,
  marginBottom: 1,
  lineHeight: "2.8 rem",
  wordBreak: "break-word",
  [theme.breakpoints.down("sm")]: {
    maxWidth: 300,
  },
  [theme.breakpoints.up("sm")]: {
    maxWidth: 600,
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: 800,
  },
}));

export const VideoDetailsItem = ({ description, details, props }) => {
  return (
    <Box sx={{ height: 100, marginTop: 2 }}>
      <StyledVideoTitle variant="h6">{description}</StyledVideoTitle>
      <Stack direction={"row"} gap={1}>
        <Avatar sx={{ width: 40, height: 40 }}>UN</Avatar>
        <Box>
          <Typography
            style={{
              fontFamily: "Roboto",
              fontSize: 16,
              marginTop: 1,
              fontWeight: 700,
            }}
            variant="body1"
          >
            {details}
          </Typography>
          <Typography
            sx={{ fontSize: 12, fontWeight: 400, maxHeight: 18, color: "#aaa" }}
            variant="subtitle2"
          >
            1M views
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};
