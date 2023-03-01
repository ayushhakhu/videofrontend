import {
  Drawer as MuiDrawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  List,
  ListItemText,
  Box,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Divider from "@mui/material/Divider";
import styled from "@emotion/styled";
import { DrawerHeaderContents } from "../molecules/DrawerHeaderContents";

const drawerWidth = 240;

const openedMixin = () => ({
  width: drawerWidth,
});
const closedMixin = () => ({
  width: 70,
});

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export const Drawer = ({
  state,
  variant = "permanent",
  showDrawer = true,
  onClose,
}) => {
  return (
    <MuiDrawer
      sx={{
        position: variant === "permanent" ? "sticky" : "absolute",
        top: variant === "permanent" ? 60 : 0,
        left: 0,
        height: window.innerHeight+10,
        ...(state && {
          ...openedMixin(),
        }),
        ...(!state && {
          ...closedMixin(),
        }),
        "& .MuiDrawer-paper": {
          position: "sticky",
          transition: "ease-in-out",
          overflowX: "hidden",
          backgroundColor: "black",
          color: "white",
        },
      }}
      open={state}
      variant={variant}
      onClose={onClose}
    >
      {!showDrawer && (
        <DrawerHeader>
          <DrawerHeaderContents onClose={onClose} />
        </DrawerHeader>
      )}
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </MuiDrawer>
  );
};
