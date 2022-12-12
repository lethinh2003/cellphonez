import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
const ThongTinBanner = ({ title }) => {
  const Container = styled(Box)({
    width: "100%",
    borderRadius: "10px",

    fontSize: "14px",
    gap: "10px",
    display: "flex",
    flexDirection: "column",
  });
  const BoxThongTin = styled(Box)({
    maxWidth: "300px",
    width: "100%",
    borderRadius: "10px",
    //height: "125px",
    boxShadow:
      "0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
    overflow: "hidden",

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  });

  const uuDaiThanhToan = [
    {
      data: "https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/evo-banner-hp.png",
    },
    {
      data: "https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/vnpay-300doi-tac.png",
    },
    {
      data: "https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/uu-dai-tt-hp-1.png",
    },
    {
      data: "https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/690x300_uu-dai_JCB.png",
    },
  ];
  const chuyenTrangThuongHieu = [
    {
      data: "https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/apple.png",
    },
    {
      data: "https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/SIS%20asus.png",
    },
    {
      data: "https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/samsung.png",
    },
    {
      data: "https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/xiaomi.png",
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
        </Box>
        <Box
          sx={{
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0,1fr))",
              sm: "repeat(3, minmax(0,1fr))",
              md: "repeat(4, minmax(0,1fr))",
            },
            display: "grid",
            gap: "10px",
          }}
        >
          {title == "Ưu đãi thanh toán" &&
            uuDaiThanhToan.map((item, i) => (
              <BoxThongTin key={i}>
                <img src={item.data} />
              </BoxThongTin>
            ))}
          {title == "Chuyên trang thương hiệu" &&
            chuyenTrangThuongHieu.map((item, i) => (
              <BoxThongTin key={i}>
                <img src={item.data} />
              </BoxThongTin>
            ))}
        </Box>
      </Container>
    </>
  );
};
export default ThongTinBanner;
