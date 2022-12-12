import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import ModalCauHinhChiTiet from "./ModalCauHinhChiTiet";

const ThongSoKyThuat = ({ data }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleClickCloseModal = () => {
    setIsOpenModal(false);
  };

  const callDataApi = async (data) => {
    const results = await axios.get(
      `${process.env.REACT_APP_ENDPOINT_SERVER}/api/v1/cauhinh/${data._id}`
    );
    return results.data;
  };
  const getListQuery = useQuery(
    ["get-detail-cauhinh-sanpham-by-slug", data],
    () => callDataApi(data),
    {
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );
  const {
    data: dataQuery,
    isLoading,
    isFetching,
    isError: isErrorQuery,
    error,
  } = getListQuery;
  useEffect(() => {
    if (error && error.response) {
      toast.error(error.response.data.message);
    }
  }, [isErrorQuery]);
  useEffect(() => {
    if (dataQuery) {
      console.log(dataQuery);
    }
  }, [dataQuery]);

  return (
    <>
      <ModalCauHinhChiTiet
        data={dataQuery}
        isOpenModal={isOpenModal}
        handleClickCloseModal={handleClickCloseModal}
      />
      <Box
        sx={{
          height: "100%",
          width: "100%",
          borderRadius: "10px",
          boxShadow:
            "0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          order: { xs: 1, lg: 0 },
        }}
      >
        <Box
          sx={{
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              color: "#d70018",
              textTransform: "uppercase",
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Thông số kỹ thuật
          </Typography>
        </Box>
        <Box
          sx={{
            borderRadius: "10px",
            border: "1px solid #e5e7eb",
            overflow: "hidden",
            maxHeight: "500px",
            overflow: "hidden",
            WebkitMaskImage: "linear-gradient(rgb(0, 0, 0) 60%, transparent)",
          }}
        >
          {dataQuery &&
            dataQuery.data &&
            dataQuery.data.data.map((item, i) => (
              <Box
                key={i}
                className="technical-item"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "14px",
                  padding: "10px",
                }}
              >
                <Typography
                  sx={{
                    width: "40%",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    width: "50%",
                  }}
                >
                  {item.data}
                </Typography>
              </Box>
            ))}
        </Box>

        <Box
          onClick={() => setIsOpenModal(true)}
          sx={{
            margin: "10px 0px",
            maxWidth: "335px",
            width: "100%",
            alignSelf: "center",
            textAlign: "center",
            backgroundColor: "#ffffff",
            fontSize: "14px",
            color: "#212529",
            borderRadius: "0 0 10px 10px",
            boxShadow:
              "0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
            padding: "10px",
            cursor: "pointer",
            border: "1px solid transparent",
            "&:hover": {
              border: "1px solid #d70018",
              background: "#fef2f2",
              color: "#d70018",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Xem cấu hình chi tiết
            <KeyboardArrowDownIcon />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default ThongSoKyThuat;
