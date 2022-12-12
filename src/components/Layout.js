import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: "1200px",
          width: "100%",
          padding: "10px",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};
export default Layout;
