import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo, useState } from "react";
import { NumericFormat } from "react-number-format";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { themSoLuongCartItem, xoaCartItem } from "../../redux/actions/cart";
const CartItem = ({ data, isSale = false, setIsCapNhat, isCapNhat }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [soLuong, setSoLuong] = useState(data.soLuong || 1);

  const handleClickRemoveCartItem = () => {
    dispatch(xoaCartItem(data._id));
    toast.info("Xóa thành công");
  };
  const handleClickChangeSoLuong = (value) => {
    const prevSoLuong = soLuong - 1;
    if (prevSoLuong === 0 && value < 0) {
      dispatch(xoaCartItem(data._id));
      toast.info("Xóa thành công");
    }
    dispatch(
      themSoLuongCartItem({
        itemID: data._id,
        soLuong: value,
      })
    );
    setSoLuong((prev) => prev - 1);
    setIsCapNhat(!isCapNhat);
  };

  const Container = styled(Box)({
    backgroundColor: "#ffffff",
    position: "relative",
    maxWidth: "570px",
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    display: "flex",
    gap: "10px",
    borderRadius: "15px",
    boxShadow:
      "0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%)",

    "& .image_product": {
      width: "30%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "contain",
      },
    },
    "& .info_product": {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      flexDirection: "column",
    },

    "& .title": {
      textAlign: "left",

      fontWeight: "bold",
      fontSize: "14px",

      color: "#444444",
    },

    "& .rating": {
      display: "flex",
    },

    "& .price": {
      "&__discount": {
        color: "#D70018",
        fontSize: "14px",
        fontWeight: "bold",
      },
      "&__initial": {
        color: "#707070",
        fontSize: "12px",
        fontWeight: "bold",
        textDecoration: "line-through",
      },
    },

    "& .promotion": {
      textAlign: "left",
      backgroundColor: "#f3f4f6",
      borderRadius: "10px",

      height: "150px",
      padding: "5px",
      "&__text": {
        fontSize: "16px",
        color: "#444444",
      },
    },

    "& .button": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      "&__item": {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "5px",
        "&-text": {
          fontSize: "12px",
          color: "#777777",
        },
        "&-icon": {
          color: "#d70018",
        },
      },
    },
  });

  return (
    <>
      {data && (
        <Container>
          <Box className="image_product" sx={{}}>
            <Link
              to={`/sanpham/${data.slug}`}
              style={{ width: "100%", height: "100%" }}
            >
              <img
                src={data.linkAnh.length > 0 ? data.linkAnh[0] : null}
                loading="lazy"
              />
            </Link>
          </Box>
          <Box className="info_product">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <Typography
                className="title"
                sx={{
                  flex: 1,
                }}
              >
                {" "}
                <Link
                  to={`/sanpham/${data.slug}`}
                  style={{
                    color: "#444444",
                  }}
                >
                  {data.tenSanPham}{" "}
                </Link>
              </Typography>
              <CloseIcon
                onClick={() => handleClickRemoveCartItem()}
                sx={{ color: "#cacece", cursor: "pointer" }}
              />
            </Box>

            <Box className="price">
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "5px",
                  alignItems: "flex-end",
                }}
              >
                <Typography className="price__discount">
                  {" "}
                  <NumericFormat
                    value={Math.round(
                      data.giaTien - (data.giaTien * data.giamGia) / 100
                    )}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    suffix={" ₫"}
                  />
                </Typography>
                {data.giamGia > 0 && (
                  <Typography className="price__initial">
                    {" "}
                    <NumericFormat
                      value={Math.round(data.giaTien)}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      suffix={" ₫"}
                    />
                  </Typography>
                )}
                {data.giamGia > 0 && (
                  <Box
                    sx={{
                      background: "#d70018",
                      padding: "5px",
                      color: "#ffffff",
                      borderRadius: "5px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Giảm {data.giamGia}%
                  </Box>
                )}
              </Box>
            </Box>
            <Box
              className="soluong"
              sx={{
                display: "flex",
                gap: "5px",
                flexWrap: "wrap",
              }}
            >
              <Typography sx={{}}>Chọn số lượng: </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                }}
              >
                <Box
                  onClick={() => handleClickChangeSoLuong(-1)}
                  sx={{
                    width: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  -
                </Box>
                <Box
                  sx={{
                    width: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {data.soLuong}
                </Box>
                <Box
                  onClick={() => handleClickChangeSoLuong(1)}
                  sx={{
                    width: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  +
                </Box>
              </Box>
            </Box>
            {!isSale && (
              <Box
                className="promotion"
                sx={{
                  visibility:
                    data.thongTinKhuyenMai.length > 0 ? "visible" : "hidden",
                }}
              >
                <Box
                  sx={{
                    overflow: "auto",
                    height: "100%",
                  }}
                >
                  <Typography className="promotion__text">
                    - Chương trình khuyến mại: <br />
                    <ul>
                      {data.thongTinKhuyenMai.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Container>
      )}
    </>
  );
};
export default memo(CartItem);
