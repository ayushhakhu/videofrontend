import { Typography } from "../atoms/Typography";
import React, { useContext } from "react";
import { ToolBar } from "../molecules/ToolBar";
import { AppBar as MuiAppBar } from "../molecules/AppBar";
import { Button } from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
// import { useCreateNewBlogs } from "../../api/mutations/useCreateNewBlogs";
import { AuthContext } from "../../hooks/AuthContext";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";
import {} from "@mui/material/className";

const StyledHeaderTitle = styled(Typography)(({ theme }) => ({
  fontFamily: `medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
  fontWeight: 700,
  [theme.breakpoints.down("md")]: {
    paddingInline: 0,
  },
  color: "rgba(0,0,0,0.8)",
}));

const StyledToolbar = styled(ToolBar)(() => ({
  "& .MuiToolbar-root": {
    backgroundColor: "black",
  },
}));

export const AppBar = ({ ...props }) => {
  const navigate = useNavigate();
  const { isAuthenticated, onLogout, username } = useContext(AuthContext);

  // const { mutate } = useCreateNewBlogs();

  return (
    <MuiAppBar color="primary" position="static" component="nav">
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} lg={1} md={1} xxl={1}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            style={{ margin: 10 }}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid item xs={11} sm={11} lg={11} md={11} xxl={11}>
          <StyledToolbar
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button>
              <StyledHeaderTitle variant="h5" onClick={() => navigate("/")}>
                YouTube
              </StyledHeaderTitle>
            </Button>
            <Box>
              {!isAuthenticated && (
                <Button
                  sx={{ textTransform: "None" }}
                  size="small"
                  color="inherit"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Button>
              )}
              {!isAuthenticated && (
                <Button
                  sx={{ textTransform: "None" }}
                  size="small"
                  color="inherit"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Signup
                </Button>
              )}
              {isAuthenticated && (
                <Button
                  sx={{ textTransform: "None" }}
                  size="small"
                  color="inherit"
                  onClick={onLogout}
                >
                  Logout
                </Button>
              )}
            </Box>
            {props.children}
          </StyledToolbar>
        </Grid>
      </Grid>
    </MuiAppBar>
  );
};
