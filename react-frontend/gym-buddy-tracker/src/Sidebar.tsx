import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "@tanstack/react-router";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const drawerWidth = 240;

const Sidebar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  return (
    <>
      <Drawer
        variant="persistent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        open={open}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <Link to="/dashboard">
              <ListItem disablePadding>
                <ListItemButton>
                  <DashboardIcon />
                  <ListItemText primary={"Dashboard"} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/workouts">
              <ListItem disablePadding>
                <ListItemButton>
                  <FitnessCenterIcon />
                  <ListItemText primary={"Trainingspläne"} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/exercises">
              <ListItem disablePadding>
                <ListItemButton>
                  <ContentPasteIcon />
                  <ListItemText primary={"Übungen"} />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Box>
        <IconButton onClick={() => setOpen(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </Drawer>
    </>
  );
};

export default Sidebar;
