import React from "react";
import { AppBar as MuiAppBar } from "@mui/material";

export const AppBar = ({ ...props }) => {
  return (
    <MuiAppBar {...props}>
      {props.children}
    </MuiAppBar>
  );
};
