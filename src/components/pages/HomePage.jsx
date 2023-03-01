import React, { useCallback, useState } from "react";
import { Grid } from "@mui/material";
import { AppBar } from "../organisms/AppBar";
import { CardsData } from "../organisms/CardsData";
import { Drawer } from "../organisms/Drawer";

const HomePage = () => {
  const [open, setOpen] = useState(true);

  const toggleDrawerState = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar onButtonClick={toggleDrawerState} />
      <Grid container>
        <Grid
          item
          xs={open ? 2 : 1}
          sm={open ? 2 : 1}
          lg={open ? 2 : 1}
          md={open ? 2 : 1}
          xxl={open ? 2 : 1}
        >
          <Drawer state={open} onClose={toggleDrawerState} />
        </Grid>
        <Grid
          item
          xs={open ? 10 : 11}
          sm={open ? 10 : 11}
          lg={open ? 10 : 11}
          md={open ? 10 : 11}
          xxl={open ? 10 : 11}
        >
          <CardsData />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
