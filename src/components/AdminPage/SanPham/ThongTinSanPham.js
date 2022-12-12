import StorefrontIcon from "@mui/icons-material/Storefront";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Item from "./Item";
const ThongTinSanPham = () => {
  let params = useParams();
  const [sanPham, setSanPham] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSanPhamDetail = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(
        `${process.env.REACT_APP_ENDPOINT_SERVER}/api/v1/sanpham/${params.sanPhamID}`
      );
      const data = result.data;
      setSanPham(data.data[0]);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      if (err.response) {
        toast.error(err.response.data.message);
      }
    }
  };
  useEffect(() => {
    fetchSanPhamDetail();
  }, [params]);

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
            <Typography className="title">Thông tin sản phẩm</Typography>
          </TitleComponent>
          {sanPham && <Item item={sanPham} />}
        </Box>
      </Box>
    </>
  );
};
export default ThongTinSanPham;
