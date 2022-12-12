import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
const Layout = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: "1200px",
          minHeight: "100vh",
          width: "100%",
          padding: "10px",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};
export default Layout;
