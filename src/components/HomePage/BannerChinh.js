import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useQuery } from "react-query";
import { Autoplay, Grid, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerChinh = () => {
  const Container = styled(Box)({
    boxShadow: "0px 0px 12px 2px #ccc",
    backgroundColor: "#ffffff",
    width: "100%",

    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    padding: "10px",
    fontSize: "14px",
  });
  const BannerItem = styled(Box)({
    width: "100%",
    height: "100%",

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  });

  const callDataApi = async () => {
    const results = await axios.get(
      `${process.env.REACT_APP_ENDPOINT_SERVER}/api/v1/system`
    );
    return results.data;
  };
  const getListQuery = useQuery("get-info-system", callDataApi, {
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });
  const {
    data: dataQuery,
    isLoading,
    isFetching,
    isError: isErrorQuery,
    error,
  } = getListQuery;

  return (
    <>
      <Container
        sx={{
          maxWidth: { xs: "100%", md: "calc(100% - 165px - 20px)", lg: "55%" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Swiper
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoHeight={true}
            centeredSlides={true}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            modules={[Grid, Navigation, Pagination, Autoplay]}
          >
            {dataQuery &&
              dataQuery.data &&
              dataQuery.data.linkAnhBannerChinh.length > 0 &&
              dataQuery.data.linkAnhBannerChinh.map((item, i) => {
                return (
                  <SwiperSlide key={i} className="banner-chinh">
                    <BannerItem>
                      <Box component={"img"} src={item}></Box>
                    </BannerItem>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </Box>
      </Container>
    </>
  );
};
export default BannerChinh;
