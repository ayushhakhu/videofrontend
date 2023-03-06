import React, { useContext } from "react";
import { ToolBar } from "../molecules/ToolBar";
import { AppBar as MuiAppBar } from "../molecules/AppBar";
import { Button } from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
// import { useCreateNewBlogs } from "../../api/mutations/useCreateNewBlogs";
import { AuthContext } from "../../hooks/AuthContext";
import { Box, Grid } from "@mui/material";
import { DrawerHeaderContents } from "../molecules/DrawerHeaderContents";
import { SearchInput } from "../molecules/SearchInput";

const StyledToolbar = styled(ToolBar)(() => ({
  display: "flex",
  backgroundColor: "inherit",
  justifyContent: "flex-end",
  alignContent: "center",
}));

export const AppBar = ({ onButtonClick, ...props }) => {
  const navigate = useNavigate();
  const { isAuthenticated, onLogout, username } = useContext(AuthContext);

  // const { mutate } = useCreateNewBlogs();

  return (
    <MuiAppBar
      color="primary"
      component="nav"
      sx={{ position: "sticky", top: 0, left: 0 }}
    >
      <Grid container>
        <Grid item xs={3} sm={3} lg={3} md={3} xxl={3}>
          <DrawerHeaderContents onClose={onButtonClick} />
        </Grid>
        <Grid item xs={6} sm={6} lg={6} md={6} xxl={6}>
          <SearchInput />
        </Grid>
        <Grid item xs={3} sm={3} lg={3} md={3} xxl={3}>
          <StyledToolbar>
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
