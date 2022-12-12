import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import ThongTinChungItem from "./ThongTinChungItem";
const ThongTinChung = () => {
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
          display: "grid",

          gridTemplateColumns: {
            xs: "repeat(1, minmax(0,1fr))",
            sm: "repeat(2, minmax(0,1fr))",
            md: "repeat(3, minmax(0,1fr))",
          },
          gap: "20px",
          width: "100%",
        }}
      >
        <ThongTinChungItem
          title={"Sản phẩm"}
          desc={"Tất cả sản phẩm"}
          icon={<ShoppingBagIcon />}
          soluong={"20.000"}
          color1={"#ffbd96"}
          color2={"#ff8fab"}
        />
        <ThongTinChungItem
          title={"Đơn hàng"}
          desc={"Tất cả đơn hàng"}
          icon={<LocalShippingIcon />}
          soluong={"120"}
          color1={"#8cc8f9"}
          color2={"#3899e6"}
        />
        <ThongTinChungItem
          title={"Sản phẩm Sale"}
          desc={"Tất cả sản phẩm đang sale"}
          icon={<TrendingDownIcon />}
          soluong={"10"}
          color1={"#81d9d2"}
          color2={"#3bd8bf"}
        />
      </Box>
    </>
  );
};
export default ThongTinChung;
