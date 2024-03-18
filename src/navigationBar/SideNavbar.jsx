import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import TopBar from "./componets.jsx/Topbar";
import SidebarItemList from "./componets.jsx/SidebarItemList";
import { Divider, Typography, styled } from "@mui/material";
import UserList from "../userList/UserList";
import {
  DrawerHeader,
  Main,
  SidebarMenuList,
  drawerWidth,
} from "./Constants/Const";
import { useLocation } from "react-router-dom";

const SideNavbar = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpenSidebar(true);
  };

  const handleDrawerClose = () => {
    setOpenSidebar(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <TopBar openSidebar={openSidebar} handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        open={openSidebar}
      >
        <SidebarItemList handleDrawerClose={handleDrawerClose} />
      </Drawer>
      <Main open={openSidebar}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};

export default SideNavbar;
