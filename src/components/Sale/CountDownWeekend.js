import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
const CountDownWeekend = () => {
  const [loaiSale, setLoaiSale] = useState("thietbi");
  const Container = styled(Box)({
    background:
      "linear-gradient(rgb(241, 50, 55), rgb(248, 207, 214)) 0% 0% / cover",
    width: "100%",
    borderRadius: "10px",
    padding: "10px",
    fontSize: "14px",
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

  useEffect(() => {}, []);

  return (
    <>
      <DemThoiGianContainer>
        <Typography className="title">Bắt đầu sau:</Typography>
        <Box className="demnguoc">
          <Box className="demnguoc__item">00</Box>
          <Box className="demnguoc__2cham">:</Box>
          <Box className="demnguoc__item">00</Box>
          <Box className="demnguoc__2cham">:</Box>
          <Box className="demnguoc__item">00</Box>
          <Box className="demnguoc__2cham">:</Box>
          <Box className="demnguoc__item">00</Box>
        </Box>
      </DemThoiGianContainer>
    </>
  );
};
export default CountDownWeekend;
