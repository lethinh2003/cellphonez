import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import BottomMenu from "./BottomMenu";
import DanhMucMobile from "./HomePage/DanhMucMobile";
const Footer = () => {
  const isOpenDanhMucMobile = useSelector((state) => state.isOpenDanhMuc);
  const MenuButton = styled(Box)({
    cursor: "pointer",
    height: "100%",
    backgroundColor: "#df3346",
    borderRadius: "10px",
    padding: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    fontSize: "12px",
    gap: "5px",

    "& .icon": {
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
    },
    "& .text": {
      fontSize: "12px",
    },
  });
  const MenuButtonSecond = styled(Box)({
    cursor: "pointer",
    height: "100%",
    borderRadius: "10px",
    padding: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    fontSize: "12px",
    gap: "5px",
    "& .mobile": {
      backgroundColor: "#df3346",
    },
    "& .icon": {
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
    },
    "& .text": {
      fontSize: "12px",
    },
    "&:hover": {
      backgroundColor: "#df3346",
    },
  });
  const timCuaHang = [
    "Tìm cửa hàng gần nhất",
    "Mua hàng từ xa",
    "Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)",
  ];
  const phuongThucThanhToan = [
    "https://image.cellphones.com.vn/x35/media/logo/payment/alepay-logo.png",
    "https://image.cellphones.com.vn/x35/media/logo/payment/zalopay-logo.png",
    "https://image.cellphones.com.vn/x35/media/logo/payment/vnpay-logo.png",
    "https://image.cellphones.com.vn/x35/media/logo/payment/moca-logo.png",
    "https://image.cellphones.com.vn/x35/media/logo/payment/onepay-logo.png",
    "https://image.cellphones.com.vn/x35/media/logo/payment/kredivo-logo.png",
    "https://image.cellphones.com.vn/x35/media/logo/payment/mpos-logo.png",
  ];
  const box3 = [
    "Mua hàng và thanh toán Online",
    "Mua hàng trả góp Online",
    "Tra thông tin đơn hàng",
    "Tra điểm Smember",
    "Xem ưu đãi Smember",
    "Tra thông tin bảo hành",
    "Tra cứu hoá đơn điện tử",
    "Trung tâm bảo hành chính hãng",
    "Quy định về việc sao lưu dữ liệu",
    "Dịch vụ bảo hành điện thoại",
    "Dịch vụ bảo hành mở rộng",
  ];
  const box4 = [
    "Khách hàng doanh nghiệp (B2B)",
    "Ưu đãi thanh toán",
    "Quy chế hoạt động",
    "Chính sách Bảo hành",
    "Liên hệ hợp tác kinh doanh",
    "Tuyển dụng",
  ];
  return (
    <>
      {isOpenDanhMucMobile && (
        <DanhMucMobile isOpenDanhMucMobile={isOpenDanhMucMobile} />
      )}
      <BottomMenu />
      <Box
        sx={{
          width: "100%",
          marginBottom: { xs: "100px", md: "unset" },
          backgroundColor: "#ffffff",
          boxShadow:
            "0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            margin: "0 auto",
            maxWidth: "1200px",
            width: "100%",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Box 1 */}
            <Box
              sx={{
                maxWidth: { xs: "100%", md: "calc(100% / 4)" },
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#363636",
                    fontWeight: "bold",
                  }}
                >
                  Tìm cửa hàng
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  {timCuaHang.map((item, i) => (
                    <Typography
                      key={i}
                      sx={{
                        fontSize: "12px",
                        color: "#4a4a4a",
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#363636",
                    fontWeight: "bold",
                  }}
                >
                  Phương thức thanh toán
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                  }}
                >
                  {phuongThucThanhToan.map((item, i) => (
                    <Box
                      key={i}
                      sx={{
                        width: "50px",
                        height: "30px",
                        border: "1px solid #dee2e6",
                        borderRadius: "5px",
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
                  ))}
                </Box>
              </Box>
            </Box>
            {/* Box 2 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                maxWidth: { xs: "100%", md: "calc(100% / 4)" },
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#4a4a4a",
                }}
              >
                Gọi mua hàng <b>1800.2097</b> (7h30 - 22h00)
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#4a4a4a",
                }}
              >
                Gọi khiếu nại <b>1800.2063</b> (8h00 - 21h30)
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#4a4a4a",
                }}
              >
                Gọi bảo hành <b>1800.2064</b> (8h00 - 21h00)
              </Typography>
              <Box
                sx={{
                  background: "#d70018",
                  borderRadius: "10px",
                  padding: "10px",
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#ffffff",
                      fontWeight: "bold",
                    }}
                  >
                    Đối tác dịch vụ bảo hành
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#ffffff",
                    }}
                  >
                    Điện thoại - máy tính
                  </Typography>
                </Box>
                <Box
                  sx={{
                    maxWidth: "100px",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <img
                    src="https://cdn2.cellphones.com.vn/x,webp,q100/media/wysiwyg/dtv-footer.png"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  background: "#334168",
                  borderRadius: "10px",
                  padding: "10px",
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#ffffff",
                      fontWeight: "bold",
                    }}
                  >
                    Trung tâm bảo hành ủy quyền Apple
                  </Typography>
                </Box>
                <Box
                  sx={{
                    maxWidth: "100px",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <img
                    src="https://cdn2.cellphones.com.vn/x,webp,q100/media/icon/logo_dtv-asp.png"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Box>
            </Box>
            {/* Box 3 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                maxWidth: { xs: "100%", md: "calc(100% / 4)" },
                width: "100%",
              }}
            >
              {box3.map((item, i) => (
                <Typography
                  key={i}
                  sx={{
                    fontSize: "12px",
                    color: "#4a4a4a",
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
            {/* Box 4 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                maxWidth: { xs: "100%", md: "calc(100% / 4)" },
                width: "100%",
              }}
            >
              {box4.map((item, i) => (
                <Typography
                  key={i}
                  sx={{
                    fontSize: "12px",
                    color: "#4a4a4a",
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Footer;
