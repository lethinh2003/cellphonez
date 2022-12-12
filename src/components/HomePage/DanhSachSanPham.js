import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Autoplay, Grid, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "../DanhSachSanPham/Item";
import ItemLoading from "../DanhSachSanPham/ItemLoading";
const DanhSachSanPham = ({ title, type, danhMucID }) => {
  const Container = styled(Box)({
    width: "100%",
    borderRadius: "10px",

    fontSize: "14px",
    gap: "10px",
    display: "flex",
    flexDirection: "column",
  });
  const HangContainer = styled(Box)({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",

    "& .button": {
      color: "#444444",
      borderRadius: "10px",
      backgroundColor: "#f3f4f6",
      border: "1px solid #e5e7eb",
      color: "#444",
      padding: "5px 10px",
      fontSize: "13px",
      cursor: "pointer",
      textTransform: "capitalize",
    },
  });
  const callDataApi = async (danhMucID) => {
    const results = await axios.get(
      `${process.env.REACT_APP_ENDPOINT_SERVER}/api/v1/sanpham/type/${danhMucID}?results=20`
    );
    return results.data;
  };
  const getListQuery = useQuery(
    ["get-all-sanpham-by-danhmuc", danhMucID],
    () => callDataApi(danhMucID),
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
    isSuccess,
  } = getListQuery;
  useEffect(() => {
    if (error && error.response) {
      toast.error(error.response.data.message);
    }
  }, [isErrorQuery]);

  useEffect(() => {
    if (data && data.data) {
    }
  }, [data]);

  const hangDienThoai = [
    {
      data: "apple",
    },
    {
      data: "samsung",
    },
    {
      data: "xiaomi",
    },
  ];

  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
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
            {title}
          </Typography>

          <HangContainer>
            {type === "dien-thoai-ddd" &&
              hangDienThoai.map((item, i) => (
                <Link key={item.data} to={`/sanpham/${type}/${item.data}`}>
                  <Box className="button">{item.data}</Box>
                </Link>
              ))}
            <Link to={`/tat-ca-san-pham/${danhMucID}`}>
              <Box className="button">Xem tất cả</Box>
            </Link>
          </HangContainer>
        </Box>

        <Box
          sx={{
            height: { xs: "unset", md: "970px" },
          }}
        >
          <Swiper
            slidesPerView={5}
            grid={{
              rows: 2,
            }}
            spaceBetween={15}
            autoplay={{
              delay: 3000,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                grid: {
                  rows: 1,
                },
              },
              600: {
                slidesPerView: 3,
                grid: {
                  rows: 1,
                },
              },

              900: {
                slidesPerView: 4,
                grid: {
                  rows: 2,
                },
              },
              1200: {
                slidesPerView: 5,
                grid: {
                  rows: 2,
                },
              },
            }}
            navigation={true}
            modules={[Grid, Navigation, Autoplay]}
          >
            {isLoading &&
              Array.from({ length: 20 }).map((item, i) => (
                <SwiperSlide
                  key={i}
                  style={{
                    height: "calc((100% - 30px) / 2)",
                  }}
                >
                  <ItemLoading />
                </SwiperSlide>
              ))}
            {data &&
              data.data &&
              data.data.map((item, i) => (
                <SwiperSlide
                  key={i}
                  style={{
                    height: "calc((100% - 30px) / 2)",
                  }}
                >
                  <Item data={item} key={item._id} />
                </SwiperSlide>
              ))}
          </Swiper>
        </Box>
      </Container>
    </>
  );
};
export default DanhSachSanPham;
