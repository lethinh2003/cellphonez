import { Box, Typography } from "@mui/material";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const HinhAnhSanPham = ({ data }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          order: 1,
          flex: 1,
          width: { xs: "100%", sm: "50%", md: "40%" },
          maxWidth: { md: "400px" },
        }}
      >
        <Box
          sx={{
            borderRadius: "10px",
            border: "1px solid #e5e7eb",
            height: "410px",
          }}
        >
          <Swiper
            spaceBetween={10}
            navigation={true}
            loop={true}
            modules={[Navigation]}
          >
            {data.dacDiemNoiBat && (
              <SwiperSlide>
                <Box
                  sx={{
                    borderRadius: "10px",
                    background: "linear-gradient(90deg,#dd5e89,#f7bb97)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px 5px",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      color: "#ffffff",
                    }}
                  >
                    Tính năng nổi bật
                  </Typography>
                  <Box
                    sx={{
                      width: "150px",
                      height: "150px",
                      backgroundColor: "#ffffff",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      component={"img"}
                      src={data.linkAnh.length > 0 ? data.linkAnh[0] : null}
                    />
                  </Box>
                  <Box
                    sx={{
                      color: "#ffffff",
                      fontSize: "14px",
                      textAlign: "left",
                    }}
                  >
                    <div
                      className="content-html"
                      style={{
                        height: "150px",
                        overflow: "auto",
                      }}
                      dangerouslySetInnerHTML={{ __html: data.dacDiemNoiBat }}
                    />
                  </Box>
                </Box>
              </SwiperSlide>
            )}
            {data.linkAnh.map((item, i) => (
              <SwiperSlide key={i}>
                <Box
                  sx={{
                    padding: "20px",
                  }}
                >
                  <img
                    src={item}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Box
          sx={{
            borderRadius: "10px",

            width: "100%",
            height: "100px",
          }}
          component={"img"}
          src={
            "https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/banner-product-xakho-hangcu.gif"
          }
        ></Box>
      </Box>
    </>
  );
};
export default HinhAnhSanPham;
