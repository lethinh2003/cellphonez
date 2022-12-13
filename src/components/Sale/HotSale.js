import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { Grid, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "../DanhSachSanPham/Item";
import CountDownWeekend from "./CountDownWeekend";
const HotSale = () => {
  const [loaiSale, setLoaiSale] = useState("thietbi");
  const Container = styled(Box)({
    background:
      "linear-gradient(rgb(241, 50, 55), rgb(248, 207, 214)) 0% 0% / cover",
    width: "100%",
    borderRadius: "10px",
    padding: "10px",
    fontSize: "14px",
  });

  const ButtonLoai = styled(Box)({
    fontSize: "14px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "#ffffff",
    borderRadius: "5px",
    padding: "5px",

    "&.active": {
      backgroundColor: "#000000",
      color: "#ffffff",
    },
  });

  const DemThoiGianContainer = styled(Box)({
    display: "flex",
    gap: "10px",
    alignItems: "center",

    "& .title": {
      color: "#ffffff",
      fontWeight: "bold",
    },

    "& .demnguoc": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "5px",
      "&__item": {
        width: "25px",
        height: "25px",
        backgroundColor: "#ffffff",
        color: "#222222",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        fontWeight: "bold",
      },
      "&__2cham": {
        fontWeight: "bold",
        color: "#ffffff",
      },
    },
  });

  const callDataApi = async (loaiSale) => {
    const results = await axios.get(
      `${process.env.REACT_APP_ENDPOINT_SERVER}/api/v1/sanpham/sale/${loaiSale}`
    );
    return results.data;
  };
  const getListQuery = useQuery(
    ["get-sanpham-sale-by-loai", loaiSale],
    () => callDataApi(loaiSale),
    {
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );
  const {
    data,
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
  const handleClickChangeLoai = (loai) => {
    setLoaiSale(loai);
  };

  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "unset", md: "center" },
            flexDirection: { xs: "column", md: "row" },
            gap: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "10px",
            }}
          >
            <ButtonLoai
              className={loaiSale === "thietbi" ? "active" : null}
              onClick={() => handleClickChangeLoai("thietbi")}
            >
              Điện thoại, Laptop, Tivi
            </ButtonLoai>
            <ButtonLoai
              className={loaiSale === "phukien" ? "active" : null}
              onClick={() => handleClickChangeLoai("phukien")}
            >
              Phụ kiện
            </ButtonLoai>
          </Box>

          <Box
            sx={{
              maxWidth: "500px",
              width: "100%",
            }}
          >
            <img
              src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/json-hotsale/HOTSALE.png"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
          <CountDownWeekend />
        </Box>
        <Box>
          {isLoading && (
            <Typography
              sx={{
                margin: "20px",
                fontSize: "30px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Đang tải...
            </Typography>
          )}
          <Swiper
            slidesPerView={5}
            grid={{
              rows: 1,
            }}
            centeredSlides={false}
            spaceBetween={10}
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
            navigation={true}
            modules={[Grid, Navigation]}
          >
            {data &&
              data.data &&
              data.data.map((item, i) => (
                <SwiperSlide key={i}>
                  <Item isSale={true} data={item} />
                </SwiperSlide>
              ))}
          </Swiper>
        </Box>
      </Container>
    </>
  );
};
export default HotSale;
