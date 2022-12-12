import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Typography } from "@mui/material";
const ButtonHanhDong = ({ data }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
              backgroundColor: "#f02a2d",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              flexDirection: "column",
              color: "#ffffff",
              flex: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Mua ngay
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              (Giao tận nơi hoặc lấy tại cửa hàng)
            </Typography>
          </Box>
          <Box
            sx={{
              cursor: "pointer",
              width: "60px",
              height: "60px",
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              border: "2px solid #e04040",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#e04040",
            }}
          >
            <AddShoppingCartIcon />
            <Typography
              sx={{
                fontSize: "7.5px",
              }}
            >
              Thêm vào giỏ
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
              backgroundColor: "#3679d5",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              flexDirection: "column",
              color: "#ffffff",
              flex: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Trả góp 0%
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              (Xét duyệt qua điện thoại)
            </Typography>
          </Box>
          <Box
            sx={{
              cursor: "pointer",
              backgroundColor: "#3679d5",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              flexDirection: "column",
              color: "#ffffff",
              flex: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Trả góp qua thẻ
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              (Visa, Mastercard, JCB)
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default ButtonHanhDong;
