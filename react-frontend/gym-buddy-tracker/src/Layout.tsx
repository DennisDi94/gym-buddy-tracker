import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { ReactNode, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Box sx={{ display: "flex", backgroundColor: "#e1e6e8" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setOpen((open) => !open)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Sidebar open={open} setOpen={setOpen} />
        <Box
          component="main"
          sx={{
            flexGrow: 3,
            p: 3,
            backgroundColor: "#e1e6e8",
            height: "100vh",
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </div>
  );
};

export default Layout;
