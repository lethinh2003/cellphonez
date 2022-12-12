import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Box, Rating, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo, useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  themDanhSachYeuThich,
  xoaDanhSachYeuThich,
} from "../../redux/actions/danhSachYeuThich";
const Item = ({ data, isSale = false }) => {
  const dispatch = useDispatch();
  const listDanhSachYeuThich = useSelector((state) => state.danhSachYeuThich);
  const [isHeart, setIsHeart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const checkIsHearted = () => {
    return listDanhSachYeuThich.find((item) => data._id == item);
  };
  useEffect(() => {
    if (checkIsHearted()) {
      setIsHeart(true);
    } else {
      setIsHeart(false);
    }
  }, [data]);
  const handleClickHeart = () => {
    if (isHeart) {
      dispatch(xoaDanhSachYeuThich(data._id));
      setIsHeart(false);
    } else {
      dispatch(themDanhSachYeuThich(data._id));
      setIsHeart(true);
    }
  };

  const Container = styled(Box)({
    backgroundColor: "#ffffff",
    position: "relative",
    maxWidth: "280px",
    width: "100%",
    borderRadius: "10px",
    padding: "10px",
    fontSize: "14px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    boxShadow:
      "0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%)",

    "& .discount-banner": {
      width: "80px",
      position: "absolute",
      height: "31px",
      background: "url(https://i.imgur.com/UvGMim1.png) 50% no-repeat",
      left: "-4px",
      top: "-3px",
      "&__text": {
        color: "#ffffff",
        fontSize: "12px",
        fontWeight: "bold",
        margin: "5px 8px auto",
      },
    },

    "& .image_product": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "170px",
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "contain",
      },
    },

    "& .title": {
      textAlign: "left",
      height: "65px",
      fontWeight: "bold",
      fontSize: "14px",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 3,
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: "#444444",
    },

    "& .rating": {
      display: "flex",
    },

    "& .price": {
      minHeight: "50px",
      maxHeight: "50px",

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
      borderRadius: "5px",
      height: "48px",
      padding: "5px",
      "&__text": {
        fontSize: "12px",
        color: "#444444",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 2,
        overflow: "hidden",
        textOverflow: "ellipsis",
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
          {data.giamGia > 0 && (
            <Box className="discount-banner">
              <Typography className="discount-banner__text">
                Giảm {data.giamGia}%
              </Typography>
            </Box>
          )}

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

          <Typography className="title">
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
              <Typography className="promotion__text">
                {data.thongTinKhuyenMai.join("; ")}
              </Typography>
            </Box>
          )}
          <Box className="rating">
            <Rating name="half-rating" defaultValue={5} precision={0.5} />
          </Box>
          <Box className="button">
            <Box className="button__item" onClick={() => handleClickHeart()}>
              <Typography className="button__item-text">Yêu thích</Typography>
              <Box className="button__item-icon">
                {!isHeart && <FavoriteBorderOutlinedIcon />}
                {isHeart && <FavoriteIcon />}
              </Box>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};
export default memo(Item);
