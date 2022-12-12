import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Box, Rating, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  const Container = styled(Box)({
    cursor: "pointer",
    marginLeft: "10px",
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
      color: "#444444",
      height: "65px",
      fontWeight: "bold",
      fontSize: "14px",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 3,
      overflow: "hidden",
      textOverflow: "ellipsis",
    },

    "& .price": {
      display: "flex",
      alignItems: "center",
      gap: "5px",
      flexWrap: "wrap",
      "&__discount": {
        color: "#D70018",
        fontSize: "16px",
        fontWeight: "bold",
      },
      "&__initial": {
        color: "#707070",
        fontSize: "14px",
        fontWeight: "bold",
        textDecoration: "line-through",
      },
    },

    "& .rating": {
      display: "flex",
    },

    "& .promotion": {
      display: "none",
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
      <Link to={`/sanpham/${data.slug}`}>
        <Container>
          <Box className="discount-banner">
            <Typography className="discount-banner__text">
              Giảm {data.giamGia}%
            </Typography>
          </Box>
          <Box className="image_product" sx={{}}>
            <img src={data.linkAnh.length > 0 ? data.linkAnh[0] : null} />
          </Box>

          <Typography className="title">{data.tenSanPham}</Typography>

          <Box className="price">
            <Typography className="price__discount">
              {" "}
              <NumericFormat
                value={data.giaTien - (data.giaTien * data.giamGia) / 100}
                displayType={"text"}
                thousandSeparator={"."}
                decimalSeparator={","}
                suffix={" ₫"}
              />
            </Typography>
            <Typography className="price__initial">
              {" "}
              <NumericFormat
                value={data.giaTien}
                displayType={"text"}
                thousandSeparator={"."}
                decimalSeparator={","}
                suffix={" ₫"}
              />
            </Typography>
          </Box>

          <Box className="rating">
            <Rating name="half-rating" defaultValue={5} precision={0.5} />
          </Box>
          <Box className="button">
            <Box className="button__item">
              <Typography className="button__item-text">Yêu thích</Typography>
              <Box className="button__item-icon">
                <FavoriteBorderOutlinedIcon />
              </Box>
            </Box>
          </Box>
        </Container>
      </Link>
    </>
  );
};
export default Item;
