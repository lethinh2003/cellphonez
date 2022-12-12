import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Box, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const SidebarItem = styled(Box)({
    height: "50px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: "5px",
    padding: "10px",
    color: "#87808f",
    transition: "0.2s linear",

    "& .title": {
      fontWeight: "bold",
      fontSize: "14px",
    },

    "&:hover, &.active": {
      backgroundColor: "#f8f8f8",
      color: "#b56eff",
    },
  });
  const location = useLocation();
  const item = [
    {
      href: "",
      title: "Trang chủ",
      icon: <HomeIcon />,
      path: "/admin",
    },
    {
      href: "sanpham",
      title: "Sản phẩm",
      icon: <StorefrontIcon />,
      path: "/admin/sanpham",
    },
  ];
  return (
    <>
      {matches && (
        <Box
          sx={{
            position: "fixed",
            top: "0",
            bottom: "0",
            left: "0",
            backgroundColor: "#ffffff",
            width: "250px",
            zIndex: 99,
          }}
        >
          <Box
            sx={{
              padding: "10px",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                height: "50px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                textTransform: "uppercase",
                color: "#ce84ff",
                borderRadius: "5px",
                marginBottom: "10px",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              <Box className="logo">cellphone Z</Box>
            </Box>
            {item.map((item, i) => (
              <Link to={item.href} key={i}>
                <SidebarItem
                  className={location.pathname == item.path ? "active" : null}
                >
                  <Typography className="title">{item.title}</Typography>
                  <Box className="icon">{item.icon}</Box>
                </SidebarItem>
              </Link>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};
export default Sidebar;
