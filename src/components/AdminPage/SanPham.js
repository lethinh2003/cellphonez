import StorefrontIcon from "@mui/icons-material/Storefront";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DanhSachSanPham from "./SanPham/DanhSachSanPham";
const SanPham = () => {
  const TitleComponent = styled(Box)({
    display: "flex",

    alignItems: "center",
    gap: "10px",
    borderRadius: "5px",
    padding: "10px",
    color: "#87808f",

    "& .btn-icon": {
      backgroundImage: "linear-gradient(to right, #d58aff , #a05aff)",
      padding: "10px",
      borderRadius: "5px",
      color: "#ffffff",
      boxShadow: "0px 0px 9px 4px #e4d0f9",
    },

    "& .title": {
      color: "#182442",
      fontWeight: "bold",
      fontSize: "20px",
    },
  });
  return (
    <>
      <Box
        sx={{
          padding: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
          }}
        >
          <TitleComponent>
            <Box className="btn-icon">
              <StorefrontIcon />
            </Box>
            <Typography className="title">Sản phẩm</Typography>
          </TitleComponent>
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <Link to="create">
              <Button variant="primary">Tạo mới</Button>
            </Link>
          </Box>
          <DanhSachSanPham />
        </Box>
      </Box>
    </>
  );
};
export default SanPham;
