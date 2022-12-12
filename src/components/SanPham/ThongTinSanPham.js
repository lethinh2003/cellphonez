import { Box, Typography } from "@mui/material";
const ThongTinSanPham = ({ data }) => {
  const getImageIcon = (i) => {
    let image;
    if (i == 0) {
      image = "https://i.imgur.com/qKRNfv6.png";
    } else if (i == 1) {
      image = "https://i.imgur.com/qp18mkY.png";
    } else if (i == 2) {
      image = "https://i.imgur.com/X2hsteP.png";
    }
    return image;
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          flex: 1,
          order: 3,
        }}
      >
        <Box
          sx={{
            border: "1px solid #e5e7eb",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#0a0a0a",
              fontWeight: "bold",
              gap: "10px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Thông tin sản phẩm
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "10px 0px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {data.thongTinSanPham.map((item, i) => (
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
                    maxWidth: "15px",
                    height: "15px",
                    objectFit: "cover",
                  }}
                  component={"img"}
                  src={getImageIcon(i)}
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
      </Box>
    </>
  );
};
export default ThongTinSanPham;
