import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const GioHang = () => {
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
      <MenuButtonSecond
        sx={{
          maxWidth: "80px",
          width: "100%",
          order: { xs: 3, md: 0 },
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: { xs: "#df3346", md: "unset" },

          gap: { xs: 0, md: "5px" },
        }}
      >
        <Box className="icon">
          <ShoppingBagOutlinedIcon />
        </Box>
        <Typography
          className="text"
          sx={{
            fontSize: { xs: "9px", md: "12px" },
          }}
        >
          Giỏ hàng
        </Typography>
      </MenuButtonSecond>
    </>
  );
};
export default GioHang;
