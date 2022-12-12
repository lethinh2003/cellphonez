import { Box } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import GiaSanPham from "./SanPham/GiaSanPham";
import HinhAnhSanPham from "./SanPham/HinhAnhSanPham";
import MoTaSanPham from "./SanPham/MoTaSanPham";
import SanPhamTuongTu from "./SanPham/SanPhamTuongTu";
import ThongSoKyThuat from "./SanPham/ThongSoKyThuat";
import ThongTinSanPham from "./SanPham/ThongTinSanPham";
const Blog = () => {
  const { sanPhamSlug } = useParams();
  useEffect(() => {
    console.log(sanPhamSlug);
  }, [sanPhamSlug]);
  return (
    <>
      <Box
        sx={{
          marginTop: "100px",
          padding: "0px 50px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <HinhAnhSanPham />
          <GiaSanPham />
          <ThongTinSanPham />
        </Box>
        <SanPhamTuongTu title={"Sản phẩm tương tự"} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <MoTaSanPham />
          <ThongSoKyThuat />
        </Box>
      </Box>
    </>
  );
};
export default Blog;
