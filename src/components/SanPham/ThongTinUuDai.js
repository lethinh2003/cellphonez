import RedeemIcon from "@mui/icons-material/Redeem";
import { Box, Typography } from "@mui/material";

const ThongTinUuDai = ({ data }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid #e5e7eb",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "5px",
            backgroundColor: "#d1d5db",
            color: "#0a0a0a",
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
            Ưu đãi thêm
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
          {data.uuDaiThem.map((item, i) => (
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

                  color: "#ffffff",
                  position: "relative",
                  "&::before": {
                    position: "absolute",
                    content: `url(https://i.imgur.com/mvpe3rJ.png)`,
                    top: "-1px",
                    left: "-1px",
                  },
                }}
              ></Typography>
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
export default ThongTinUuDai;
