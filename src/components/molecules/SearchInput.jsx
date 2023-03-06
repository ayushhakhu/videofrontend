import React from "react";
import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Stack, Divider } from "@mui/material";
import { IconButton } from "../atoms/IconButton";

export const SearchInput = ({ props }) => {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      sx={{
        border: "1px solid white",
        borderRadius: 12,
        marginTop: 2,
        alignItems: "center",
        paddingInlineEnd: 2,
      }}
    >
      <Input
        fullWidth
        sx={{
          "& .MuiInput-input": {
            paddingInlineStart: 5,
            paddingBlock: 1,
            color: "white",
          },
        }}
        disableUnderline
      />
      <Divider />
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        // onClick={() => setopen(false)}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};
