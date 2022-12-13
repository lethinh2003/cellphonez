import HomeIcon from "@mui/icons-material/Home";
import {
  Box,
  Breadcrumbs,
  CircularProgress,
  Rating,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ButtonHanhDong from "./ButtonHanhDong";
import GiaSanPham from "./GiaSanPham";
import HinhAnhSanPham from "./HinhAnhSanPham";
import MoTaSanPham from "./MoTaSanPham";
import SanPhamTuongTu from "./SanPhamTuongTu";
import ThongSoKyThuat from "./ThongSoKyThuat";
import ThongTinKhuyenMai from "./ThongTinKhuyenMai";
import ThongTinSanPham from "./ThongTinSanPham";
import ThongTinUuDai from "./ThongTinUuDai";
const SanPhamDetail = () => {
  const { sanPhamSlug } = useParams();
  const callDataApi = async (sanPhamSlug) => {
    const results = await axios.get(
      `${process.env.REACT_APP_ENDPOINT_SERVER}/api/v1/sanpham/slug/${sanPhamSlug}`
    );
    return results.data;
  };
  const getListQuery = useQuery(
    ["get-detail-sanpham-by-slug", sanPhamSlug],
    () => callDataApi(sanPhamSlug),
    {
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );
  const {
    data,
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
    if (data && data.data) {
      document.title = data.data.tenSanPham;
    }
  }, [data]);

  return (
    <>
      <Box
        sx={{
          marginTop: "74px",

          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {isLoading && (
          <Box
            sx={{
              alignSelf: "center",
            }}
          >
            <CircularProgress
              sx={{
                color: "#d70018",
              }}
            />
          </Box>
        )}
        {!isLoading && data && data.data && (
          <>
            <Breadcrumbs
              separator="›"
              sx={{
                fontSize: "12px",
              }}
            >
              <Link to="/">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <HomeIcon
                    sx={{
                      color: "#d70018",
                      width: "15px",
                      height: "15px",
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#707070",
                      fontSize: "12px",
                    }}
                  >
                    Trang chủ
                  </Typography>
                </Box>
              </Link>
              <Link to={`/tat-ca-san-pham/${data.data.danhMuc._id}`}>
                <Typography
                  sx={{
                    color: "#707070",
                    fontSize: "12px",
                  }}
                >
                  {data.data.danhMuc.tenDanhMuc}
                </Typography>
              </Link>

              <Typography
                sx={{
                  color: "#707070",
                  textTransform: "uppercase",
                  fontSize: "12px",
                }}
              >
                {data.data.hang}
              </Typography>

              <Typography
                sx={{
                  color: "#707070",
                  fontSize: "12px",
                }}
              >
                {data.data.tenSanPham}
              </Typography>
            </Breadcrumbs>

            <Box
              sx={{
                borderBottom: "3px solid #f5f5f5",
                paddingBottom: "10px",
                display: "flex",
                gap: "10px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography
                sx={{
                  color: "#0a26c",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {data.data.tenSanPham}
              </Typography>
              <Rating
                name="half-rating"
                sx={{
                  fontSize: "18px",
                }}
                defaultValue={5}
                precision={0.5}
              />
              <Typography
                sx={{
                  color: "#4a4a4a",
                  fontSize: "14px",
                }}
              >
                0 đánh giá
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", sm: "row" },
                gap: "10px",
              }}
            >
              <HinhAnhSanPham data={data.data} />
              <Box
                sx={{
                  display: "flex",
                  order: 2,
                  gap: "10px",
                  flexDirection: { xs: "column", lg: "row" },
                  flex: { md: 1 },
                  width: { xs: "100%", sm: "50%" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    maxWidth: { xs: "100%", lg: "450px" },
                    width: "100%",
                    order: 2,
                  }}
                >
                  <GiaSanPham data={data.data} />
                  <ThongTinKhuyenMai data={data.data} />
                  <ButtonHanhDong data={data.data} />
                  <ThongTinUuDai data={data.data} />
                </Box>
                <ThongTinSanPham data={data.data} />
              </Box>
            </Box>
            <SanPhamTuongTu data={data.data} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                flexDirection: { xs: "column", lg: "row" },
              }}
            >
              <MoTaSanPham data={data.data} />
              <ThongSoKyThuat data={data.data} />
            </Box>
          </>
        )}
      </Box>
    </>
  );
};
export default SanPhamDetail;
