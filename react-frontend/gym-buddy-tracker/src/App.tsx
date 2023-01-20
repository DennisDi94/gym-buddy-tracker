import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import BasicTable from "./UIComponents/BasicTable";
import MenuIcon from "@mui/icons-material/Menu";
import Layout from "./Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <BasicTable></BasicTable>
      </Layout>
    </>
  );
}

export default App;
