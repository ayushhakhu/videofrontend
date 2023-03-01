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

export const CardItem = ({ imagePath, description, details, ...props }) => {
  const navigate = useNavigate();
  return (
    <Card
      {...props}
      sx={{
        width: 320,
        height: 280,
        boxShadow: 0,
      }}
      onClick={() => navigate(`/${description}`)}
    >
      <CardMedia
        component="img"
        height="200"
        image={require(`../../data/${imagePath}`)}
        title={imagePath}
        sx={{ objectFit: "fill", borderRadius: 2, cursor: "pointer" }}
      />
      <CardContent
        sx={{
          paddingInline: 0,
          fontFamily: `"Roboto","Arial","sans-serif"`,
          fontSize: 14,
          lineHeight: 20,
          fontWeight: 500,
          whiteSpace: "normal",
          cursor: "pointer",
        }}
      >
        <Stack direction={"row"} gap={2}>
          <Avatar sx={{ width: 35, height: 35 }}>UN</Avatar>
          <Box sx={{ width: 250, height: 94 }}>
            <Typography
              sx={{
                fontFamily: `"Roboto","Arial","sans-serif"`,
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
                fontFamily: `"Roboto","Arial","sans-serif"`,
                fontSize: 12,
              }}
              variant="subtitle2"
            >
              {details}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};
