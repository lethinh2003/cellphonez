import RedeemIcon from "@mui/icons-material/Redeem";
import { Box, Typography } from "@mui/material";

const ThongTinKhuyenMai = ({ data }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid #fee2e2",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "5px",
            backgroundColor: "#fee2e2",
            color: "#d70018",
            fontWeight: "bold",
            gap: "10px",
          }}
        >
          <RedeemIcon />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Khuyến mãi
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "20px 10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {data.thongTinKhuyenMai.map((item, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  minWidth: "15px",

                  height: "15px",
                  textAlign: "center",
                  fontSize: "10px",
                  borderRadius: "50%",
                  fontWeight: 600,
                  backgroundColor: "#cc0f35",
                  color: "#ffffff",
                }}
              >
                {i + 1}
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
export default ThongTinKhuyenMai;
