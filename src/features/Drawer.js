import {
  Drawer,
  Divider,
  List,
  ListItemText,
  ListItemIcon,
  ListItem,
  ListItemButton,
  Box
} from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import { Checklist, Lightbulb, TrendingUp } from "@mui/icons-material";
import { Link } from 'react-router-dom';

import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import { styled, useTheme } from "@mui/material/styles";
import parry from "../assets/parry.png";
import bg from "../assets/subway2.jpg";

export function FixedDrawer({ userID = 0, drawerWidth=250 }) {
  const open = true;
  const drawerWidthStr = drawerWidth + "px";


  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    backgroundColor: "rgb(0, 10, 25)"
  }));
  
  const style = {
    backgroundBlendMode: "overlay",
    backgroundImage: `url(${bg})`,
    backgroundColor: "rgba(250, 250, 255, .70)",
    backgroundRepeat: "no-repeat",
    backgroundAuto: "auto"
  };

  const headerStyle = {...style};
  /*
  headerStyle.backgroundColor = "rgba(0, 10, 20, .9)";
  headerStyle.color = "rgba(225, 255, 210, 1)";*/
  headerStyle.backgroundColor = "rgba(250, 250, 255, .6)";
  headerStyle.fontWeight = "bold";
  headerStyle.fontStyle = "italic";

  return (
    <Drawer
      sx={{
        width: drawerWidthStr,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidthStr,
          boxSizing: "border-box"
        }
      }}
      variant="persistent"
      anchor="left"
      open={open}
      style={style}
    >

      <DrawerHeader style={headerStyle}>
        <ListItem key={"Lists"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SportsMartialArtsIcon />
            </ListItemIcon>
            Git Gud
          </ListItemButton>
        </ListItem>
      </DrawerHeader>

      <Divider />
      <Box style={style} height={"100%"}>
        <List>
          <Link to="/lists">
            <ListItem key={"Lists"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ListIcon />
                </ListItemIcon>
                <ListItemText primary={"Lists"} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/daily">
            <ListItem key={"Daily"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Checklist />
                </ListItemIcon>
                <ListItemText primary={"Daily"} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/progress">
            <ListItem key={"Progress"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TrendingUp/>
                </ListItemIcon>
                <ListItemText primary={"Progress"} />
              </ListItemButton>
            </ListItem>
          </Link>
          <ListItem key={"Suggestions"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Lightbulb />
              </ListItemIcon>
              <ListItemText primary={"Suggestions"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
