import React, { useContext } from "react";
import { ToolBar } from "../molecules/ToolBar";
import { AppBar as MuiAppBar } from "../molecules/AppBar";
import { Button } from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
// import { useCreateNewBlogs } from "../../api/mutations/useCreateNewBlogs";
import { AuthContext } from "../../hooks/AuthContext";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { DrawerHeaderContents } from "../molecules/DrawerHeaderContents";

const StyledToolbar = styled(ToolBar)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  backgroundColor: "black",
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
        <Grid
          item
          xs={6}
          sm={6}
          lg={2}
          md={2}
          xxl={2}
          sx={{ backgroundColor: "black" }}
        >
          <DrawerHeaderContents onClose={onButtonClick} />
        </Grid>
        <Grid item xs={6} sm={6} lg={10} md={10} xxl={10}>
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
