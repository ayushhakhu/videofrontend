import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const RelatedVideoCardItem = ({
  imagePath,
  description,
  details,
  ...props
}) => {
  const navigate = useNavigate();
  return (
    <Stack direction={"row"} gap={2} sx={{ marginBottom: 5 }}>
      <Card
        {...props}
        sx={{
          width: 180,
          boxShadow: 0,
        }}
        onClick={() => navigate(`/${description}`)}
      >
        <CardMedia
          height={90}
          component="img"
          image={require(`../../data/${imagePath}`)}
          title={imagePath}
          sx={{
            objectFit: "fill",
            borderRadius: 2,
            cursor: "pointer",
          }}
        />
      </Card>
      <Box sx={{ width: 250, height: 94 }}>
        <Typography
          sx={{
            fontFamily: "Roboto",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            fontSize: 12,
            fontWeight: 700,
            marginBottom: 1,
          }}
          variant="h3"
        >
          {description}
        </Typography>
        <Typography
          style={{
            fontFamily: "Roboto",
            fontSize: 12,
          }}
          variant="subtitle2"
        >
          {details}
        </Typography>
      </Box>
    </Stack>
  );
};
