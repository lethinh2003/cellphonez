import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setIsOpenDanhMuc } from "../redux/actions/openDanhMuc";
const BottomMenu = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState("home");

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "") {
      setValue("home");
    } else if (
      location.pathname === "/tra-cuu-don-hang" ||
      location.pathname === "/tra-cuu-don-hang/"
    ) {
      setValue("tra-cuu-don-hang");
    } else {
      setValue("");
    }
    console.log(location);
  }, [location]);

  const BottomNavigationComponent = styled(Box)({
    position: "fixed",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "#ffffff",
    height: "70px",
    zIndex: 1002,
    gap: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow:
      "0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
    borderRadius: "10px 10px 0 0",
  });
  const BottomNavigationItem = styled(Box)({
    maxWidth: "calc(100% /4)",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    color: "#707070",
    fontSize: "12px",
    padding: "5px",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    cursor: "pointer",

    "& svg": {
      width: "30px",
      height: "30px",
    },

    "& .title": {
      color: "#707070",
      fontSize: "12px",
      fontWeight: "bold",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "1",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },

    "&:hover, &.active, &:hover > .title, &.active > .title": {
      color: "#d70018",
    },
  });
  const handleClickChangeLocation = (item) => {
    if (item === "home") {
      setValue("home");
      navigate("/");
    } else if (item === "admin-panel") {
      navigate("/admin");
      setValue("admin-panel");
    } else if (item === "tra-cuu-don-hang") {
      navigate("/tra-cuu-don-hang");
      setValue("tra-cuu-don-hang");
    } else if (item === "danh-muc") {
      dispatch(setIsOpenDanhMuc(true));
    }
  };
  const listMenu = [
    {
      title: "Danh mục",
      icon: <ListAltOutlinedIcon />,
      data: "danh-muc",
    },

    {
      title: "Home",
      icon: <HomeOutlinedIcon />,
      data: "home",
    },
    {
      title: "Tra cứu đơn hàng",
      icon: <LocalShippingOutlinedIcon />,
      data: "tra-cuu-don-hang",
    },
    {
      title: "Admin Panel",
      icon: <AccountCircleOutlinedIcon />,
      data: "admin-panel",
    },
  ];

  return (
    <>
      <BottomNavigationComponent
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
        {listMenu.map((item, i) => (
          <BottomNavigationItem
            onClick={() => handleClickChangeLocation(item.data)}
            key={i}
            className={value === item.data ? "active" : null}
          >
            {item.icon}
            <Typography className="title"> {item.title}</Typography>
          </BottomNavigationItem>
        ))}
      </BottomNavigationComponent>
    </>
  );
};
export default BottomMenu;
