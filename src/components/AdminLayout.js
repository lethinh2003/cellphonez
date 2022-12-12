import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./AdminPage/Header";
import Sidebar from "./AdminPage/Sidebar";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import SidebarMobile from "./AdminPage/SidebarMobile";
const Admin = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [isSidebarMobile, setIsSidebarMobile] = useState(false);
  const handleClickSidebarMobile = () => {
    setIsSidebarMobile(!isSidebarMobile);
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f2edf3",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Sidebar />
        {isSidebarMobile && (
          <SidebarMobile
            handleClickSidebarMobile={handleClickSidebarMobile}
            isSidebarMobile={isSidebarMobile}
          />
        )}
        <Header handleClickSidebarMobile={handleClickSidebarMobile} />
        <Box
          sx={{
            width: matches ? "calc(100% - 250px)" : "100%",
            position: "relative",
            left: matches ? "250px" : "0px",
            top: "70px",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
export default Admin;
