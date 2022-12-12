import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import BannerChinh from "./HomePage/BannerChinh";
import BannerPhu from "./HomePage/BannerPhu";
import DanhMuc from "./HomePage/DanhMuc";
import DanhSachSanPham from "./HomePage/DanhSachSanPham";
import HotSale from "./Sale/HotSale";
const Home = () => {
  const listDanhMuc = useSelector((state) => state.danhMuc);
  const HomePageInformation = styled(Box)({
    display: "flex",
    justifyContent: "space-between",

    paddingBottom: "50px",
    gap: "20px",
    height: "435px",
    width: "100%",
  });
  useEffect(() => {
    document.title =
      "CellphoneZ - Điện thoại, laptop, tablet, phụ kiện chính hãng";
  }, []);
  return (
    <>
      <Box
        sx={{
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <HomePageInformation
          sx={{
            height: { xs: "unset", md: "435px" },
          }}
        >
          <DanhMuc />
          <BannerChinh />
          <BannerPhu />
        </HomePageInformation>
        <HotSale />
        {listDanhMuc.map((item, i) => (
          <DanhSachSanPham
            key={i}
            title={item.tenDanhMuc}
            type={item.slug}
            danhMucID={item._id}
          />
        ))}
      </Box>
    </>
  );
};
export default Home;
