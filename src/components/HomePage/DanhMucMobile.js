import { Backdrop, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setDanhMuc } from "../../redux/actions/danhMuc";
import { setIsOpenDanhMuc } from "../../redux/actions/openDanhMuc";
const DanhMucMobile = ({ isOpenDanhMucMobile }) => {
  const dispatch = useDispatch();
  const Container = styled(Box)({
    position: "absolute",
    top: "64px",
    left: "10px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "15%",
    minWidth: "165px",
    boxShadow: "0px 0px 12px 2px #4e4b4b",
    display: "flex",
    flexDirection: "column",
  });
  const DanhMucItem = styled(Box)({
    backgroundColor: "#ffffff",
    borderRadius: "5px",
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    padding: "5px",
    gap: "10px",

    "& .icon": {
      width: "25px",
      height: "25px",
    },

    "& .title": {
      color: "#343A40",
      fontSize: "12px",
      fontWeight: "bold",
    },
    "&:hover": {
      backgroundColor: "#f3f4f6",
    },
  });

  const callDataApi = async () => {
    const results = await axios.get(
      `${process.env.REACT_APP_ENDPOINT_SERVER}/api/v1/danhmuc`
    );
    return results.data;
  };
  const getListQuery = useQuery("get-all-danhmuc", callDataApi, {
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });
  const {
    data: dataQuery,
    isLoading,
    isFetching,
    isError: isErrorQuery,
    error,
  } = getListQuery;
  useEffect(() => {
    if (dataQuery && dataQuery.data) {
      dispatch(setDanhMuc(dataQuery.data));
    }
  }, [dataQuery]);

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isOpenDanhMucMobile}
        onClick={() => dispatch(setIsOpenDanhMuc(false))}
      >
        <Container>
          {dataQuery &&
            dataQuery.data.length > 0 &&
            dataQuery.data.map((item, i) => {
              return (
                <Link key={item._id} to={`/tat-ca-san-pham/${item._id}`}>
                  <DanhMucItem>
                    <Box
                      className="icon"
                      sx={{
                        backgroundImage: `url(${item.linkAnh})`,
                      }}
                    ></Box>
                    <Typography className="title">{item.tenDanhMuc}</Typography>
                  </DanhMucItem>
                </Link>
              );
            })}
        </Container>
      </Backdrop>
    </>
  );
};
export default DanhMucMobile;
