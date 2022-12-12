import { Box, Skeleton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ItemLoading = ({}) => {
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
      <Container>
        <Box className="image_product" sx={{}}>
          <Skeleton
            sx={{
              width: "100%",
              height: "100%",
            }}
            variant="rectangular"
          />{" "}
        </Box>
        <Typography className="title">
          {" "}
          <Skeleton variant="rectangular" height={30} width={"100%"} />
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
              <Skeleton variant="rectangular" height={50} width={100} />
            </Typography>
          </Box>
        </Box>

        <Box className="rating">
          <Skeleton variant="rectangular" height={30} width={150} />
        </Box>
        <Box className="button">
          <Skeleton variant="rectangular" height={20} width={100} />
        </Box>
      </Container>
    </>
  );
};
export default ItemLoading;
