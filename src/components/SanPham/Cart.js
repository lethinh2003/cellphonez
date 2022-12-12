import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, CircularProgress, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";
import { NumericFormat } from "react-number-format";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartDatHang from "./CartDatHang";
import CartItem from "./CartItem";
const Cart = () => {
  const timerLoadingRef = useRef(null);
  const navigate = useNavigate();
  const [hoTen, setHoTen] = useState("");
  const [tongTien, setTongTien] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isCapNhat, setIsCapNhat] = useState(false);
  const [isDatHang, setIsDatHang] = useState(false);
  const listCart = useSelector((state) => state.cart);

  useEffect(() => {
    timerLoadingRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timerLoadingRef.current);
    };
  }, []);
  useEffect(() => {
    let tien = 0;
    listCart.forEach((item) => {
      tien += Math.round(
        (item.giaTien - (item.giaTien * item.giamGia) / 100) * item.soLuong
      );
    });
    setTongTien(tien);
  }, [listCart, isCapNhat]);
  const Container = styled(Box)({
    margin: "0 auto",
    maxWidth: "600px",
    width: "100%",
    borderRadius: "10px",
    marginTop: "100px",
    fontSize: "14px",
    gap: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });
  const handleClickDatHang = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setIsDatHang(true);
  };

  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            width: "100%",
          }}
        >
          {isLoading && (
            <CircularProgress
              sx={{
                color: "#d70018",
              }}
            />
          )}

          {!isLoading && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#d70018",
                fontWeight: "bold",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Box
                onClick={
                  !isDatHang ? () => navigate(-1) : () => setIsDatHang(false)
                }
                sx={{
                  display: "flex",
                  cursor: "pointer",
                }}
              >
                <ArrowBackIosIcon />
                <Typography
                  sx={{
                    color: "#d70018",
                    fontWeight: "bold",
                  }}
                >
                  Trở về
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "#d70018",
                  fontWeight: "bold",
                }}
              >
                {!isDatHang ? "Giỏ hàng" : "Đặt hàng"}
              </Typography>
            </Box>
          )}

          {!isLoading && isDatHang && (
            <CartDatHang
              tongTien={tongTien}
              listCart={listCart}
              setIsDatHang={setIsDatHang}
            />
          )}
          {!isLoading && listCart.length == 0 && (
            <>
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                }}
              >
                <img
                  src="https://i.imgur.com/NE1RYMn.png"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "22px",
                  color: "#444",
                }}
              >
                Không có sản phẩm nào trong giỏ hàng, vui lòng quay lại
              </Typography>
              <Box
                onClick={() => navigate("/")}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textTransform: "uppercase",
                  background: "#d70018",
                  borderRadius: "10px",
                  padding: "10px",
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Quay lại trang chủ
              </Box>
            </>
          )}
          {!isLoading &&
            !isDatHang &&
            listCart.map((item, i) => (
              <CartItem
                setIsCapNhat={setIsCapNhat}
                isCapNhat={isCapNhat}
                key={item._id}
                data={item}
              />
            ))}
        </Box>
        {!isLoading && listCart.length > 0 && (
          <Box
            sx={{
              width: "100%",
              padding: "10px",
              gap: "10px",
              display: "flex",
              flexDirection: "column",
              borderRadius: "15px",
              boxShadow:
                "0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#0e2431",
                  fontWeight: "bold",
                }}
              >
                Tổng tiền tạm tính:
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#d70018",
                  fontWeight: "bold",
                }}
              >
                <NumericFormat
                  value={tongTien}
                  displayType={"text"}
                  thousandSeparator={"."}
                  decimalSeparator={","}
                  suffix={" ₫"}
                />
              </Typography>
            </Box>
            {!isDatHang && (
              <Box
                onClick={() => handleClickDatHang()}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textTransform: "uppercase",
                  background: "#d70018",
                  borderRadius: "10px",
                  padding: "10px",
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Tiến hành đặt hàng
              </Box>
            )}
            <Box
              onClick={() => navigate("/")}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textTransform: "uppercase",
                cursor: "pointer",

                borderRadius: "10px",
                padding: "10px",
                color: "#dc3545",
                borderColor: "#dc3545",
                border: "1px solid",
                fontSize: "16px",
                fontWeight: "bold",

                "&:hover": {
                  backgroundColor: "#d70018",
                  color: "#ffffff",
                },
              }}
            >
              Chọn thêm sản phẩm khác
            </Box>
          </Box>
        )}
      </Container>
    </>
  );
};
export default Cart;
