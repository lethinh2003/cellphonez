import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { Grid, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "../DanhSachSanPham/Item";

const SanPhamTuongTu = ({ data }) => {
  const Container = styled(Box)({
    width: "100%",
    borderRadius: "10px",
    padding: "10px",
    fontSize: "14px",

    display: "flex",
    flexDirection: "column",
    gap: "10px",
  });
  const HangContainer = styled(Box)({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",

    "& .button": {
      borderRadius: "10px",
      backgroundColor: "#f3f4f6",
      border: "1px solid #e5e7eb",
      color: "#444",
      padding: "5px 10px",
      fontSize: "13px",
      cursor: "pointer",
    },
  });

  const callDataApi = async (data) => {
    const results = await axios.get(
      `${process.env.REACT_APP_ENDPOINT_SERVER}/api/v1/sanpham/lienquan/${data.danhMuc._id}?sanpham=${data._id}&results=5`
    );
    return results.data;
  };
  const getListQuery = useQuery(
    ["get-sanpham-lienquan-by-danhmuc", data],
    () => callDataApi(data),
    {
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );
  const {
    data: dataQuery,
    isLoading,
    isFetching,
    isError: isErrorQuery,
    error,
  } = getListQuery;
  useEffect(() => {
    if (error && error.response) {
      toast.error(error.response.data.message);
    }
  }, [isErrorQuery]);
  useEffect(() => {
    if (dataQuery) {
      console.log(dataQuery);
    }
  }, [dataQuery]);

  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              gap: "10px",
              textTransform: "uppercase",
              fontSize: "22px",
              color: "#444444",
              fontWeight: "bold",
            }}
            component={"h2"}
          >
            Sản phẩm tương tự
          </Typography>
        </Box>
        <Box>
          <Swiper
            slidesPerView={5}
            grid={{
              rows: 1,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 3,
              },
              790: {
                slidesPerView: 3,
              },
              995: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            spaceBetween={10}
            navigation={true}
            modules={[Grid, Navigation]}
          >
            {dataQuery &&
              dataQuery.data &&
              dataQuery.data.map((item, i) => (
                <SwiperSlide key={i}>
                  <Item data={item} />
                </SwiperSlide>
              ))}
          </Swiper>
        </Box>
      </Container>
    </>
  );
};
export default SanPhamTuongTu;
