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
      <Grid container spacing={2}>
        <Grid
          item
          xs={open ? 2.5 : 1}
          sm={open ? 2.5 : 1}
          lg={open ? 2.5 : 1}
          md={open ? 2.5 : 1}
          xxl={open ? 2.5 : 1}
        >
          <Drawer state={open} onClose={toggleDrawerState} />
        </Grid>
        <Grid
          item
          xs={open ? 9.5 : 11}
          sm={open ? 9.5 : 11}
          lg={open ? 9.5 : 11}
          md={open ? 9.5 : 11}
          xxl={open ? 9.5 : 11}
        >
          <CardsData />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
