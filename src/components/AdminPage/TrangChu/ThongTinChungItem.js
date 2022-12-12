import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
const ThongTinChungItem = ({ color1, color2, title, icon, soluong, desc }) => {
  const ContainerBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "25px",
    borderRadius: "5px",
    padding: "30px",
    color: "#ffffff",
    width: "100%",

    height: "200px",
    fontWeight: "bold",
    backgroundImage: "linear-gradient(to right, #d58aff , #a05aff)",
    "& .title": {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
    },
    "& .number": {
      justifySelf: "flex-start",
      fontSize: "25px",
      width: "100%",
    },

    "& .desc": {
      width: "100%",
    },
  });
  return (
    <>
      <ContainerBox
        sx={{
          backgroundImage: `linear-gradient(to right, ${color1} , ${color2})`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Box className="title">
            <Typography>{title}</Typography>
            <Box>{icon}</Box>
          </Box>
          <Box className="number">{soluong}</Box>
        </Box>
        <Box className="desc">{desc}</Box>
      </ContainerBox>
    </>
  );
};
export default ThongTinChungItem;
