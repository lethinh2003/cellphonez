import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import GioHang from "./Header/GioHang";
import SearchForm from "./Header/SearchForm";
const Header = () => {
  const MenuButton = styled(Box)({
    cursor: "pointer",
    height: "100%",
    backgroundColor: "#df3346",
    borderRadius: "10px",
    padding: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    fontSize: "12px",
    gap: "5px",

    "& .icon": {
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
    },
    "& .text": {
      fontSize: "12px",
    },
  });
  const MenuButtonSecond = styled(Box)({
    cursor: "pointer",
    height: "100%",
    borderRadius: "10px",
    padding: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    fontSize: "12px",
    gap: "5px",
    "& .mobile": {
      backgroundColor: "#df3346",
    },
    "& .icon": {
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
    },
    "& .text": {
      fontSize: "12px",
    },
    "&:hover": {
      backgroundColor: "#df3346",
    },
  });

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 64,
          backgroundColor: "#d70018",
          position: "fixed",
          padding: "10px",
          top: 0,
          zIndex: 999,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "100%",
            gap: "15px",
          }}
        >
          <Box
            className="logo"
            sx={{
              minWidth: "35px",
              height: "35px",
              borderRadius: "10px",
              border: "1px solid #ffffff",
              padding: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              display: { xs: "block", md: "none" },
              order: { xs: 0, md: 0 },
            }}
          >
            <Link to="/">
              <img
                src="https://i.imgur.com/SHLiyg9.png"
                alt="CellPhoneZ"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Link>
          </Box>
          <Box
            className="logo"
            sx={{
              maxWidth: "185px",
              width: "100%",
              height: "100%",
              display: { xs: "none", md: "block" },
            }}
          >
            <Link to="/">
              <img
                src="https://i.imgur.com/Ny7TgHY.png"
                alt="CellPhoneZ"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Link>
          </Box>
          <MenuButton
            sx={{
              display: { xs: "none", md: "flex" },
              maxWidth: "100px",
              width: "100%",
            }}
          >
            <Box className="icon">
              <ListAltOutlinedIcon />
            </Box>
            <Typography className="text">Danh mục</Typography>
          </MenuButton>
          <MenuButton
            sx={{
              maxWidth: "110px",
              width: "100%",
              order: { xs: 2, md: 0 },
              display: { xs: "none", s400: "flex" },
            }}
          >
            <Box className="icon">
              <LocationOnOutlinedIcon />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "9px", md: "10px" },
                  fontWeight: "bold",
                }}
              >
                Xem giá tại
              </Typography>
              <Typography
                className="text"
                sx={{
                  fontSize: { xs: "9px", md: "12px" },
                }}
              >
                Hồ Chí Minh
              </Typography>
            </Box>
          </MenuButton>
          <SearchForm />

          <MenuButtonSecond
            sx={{
              display: { xs: "none", lg: "flex" },
              maxWidth: "120px",
              width: "100%",
            }}
          >
            <Box className="icon">
              <PhoneOutlinedIcon />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography className="text">
                Gọi mua hàng <br></br> 1900.0000{" "}
              </Typography>
            </Box>
          </MenuButtonSecond>
          <MenuButtonSecond
            sx={{
              display: { xs: "none", lg: "flex" },
              maxWidth: "100px",
              width: "100%",
            }}
          >
            <Box className="icon">
              <LocationOnOutlinedIcon />
            </Box>
            <Typography className="text">Cửa hàng gần bạn</Typography>
          </MenuButtonSecond>
          <MenuButtonSecond
            sx={{
              display: { xs: "none", md: "flex" },
              width: "100%",
              maxWidth: "120px",
            }}
          >
            <Box className="icon">
              <LocalShippingOutlinedIcon />
            </Box>
            <Typography className="text">Tra cứu đơn hàng</Typography>
          </MenuButtonSecond>

          <GioHang />

          <Box
            sx={{
              maxWidth: "85px",
              width: "100%",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link
              to="/admin"
              style={{
                width: "100%",
              }}
            >
              <MenuButton
                sx={{
                  flexDirection: "column",
                  gap: "0px",
                }}
              >
                <Box className="icon">
                  <AccountCircleOutlinedIcon />
                </Box>
                <Typography className="text">Admin Panel</Typography>
              </MenuButton>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Header;
