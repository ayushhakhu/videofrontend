import { Typography, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const StyledHamburgButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginInline: 5,
    marginTop: 10,
  },
  [theme.breakpoints.up("sm")]: {
    marginInline: 10,
    marginTop: 13,
  },
  [theme.breakpoints.up("md")]: {
    marginInline: 10,
    marginTop: 15,
  },
}));

const StyledHeaderTitle = styled(Typography)(({ theme }) => ({
  fontFamily: `Roboto, Arial, sans-serif;`,
  fontWeight: 500,
  [theme.breakpoints.down("md")]: {
    paddingInline: 0,
  },
  alignContent: "center",
  paddingTop: 15,
  fontSize: 20,
  color: "white",
}));

export const DrawerHeaderContents = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <>
      <StyledHamburgButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={onClose}
      >
        <MenuIcon />
      </StyledHamburgButton>
      <Button disableRipple>
        <StyledHeaderTitle variant="h5" onClick={() => navigate("/")}>
          YouTube
        </StyledHeaderTitle>
      </Button>
    </>
  );
};
