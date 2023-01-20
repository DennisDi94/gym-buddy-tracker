import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DashboardIcon from "@mui/icons-material/Dashboard";
const Sidebar = () => {
  return (
    <>
      <Drawer anchor={"left"} open={true} variant="persistent"></Drawer>
    </>
  );
};

export default Sidebar;
