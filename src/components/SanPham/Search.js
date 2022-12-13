import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import {
  Backdrop,
  Box,
  Breadcrumbs,
  CircularProgress,
  Typography,
} from "@mui/material";
import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import Item from "../DanhSachSanPham/Item";
import ItemLoading from "../DanhSachSanPham/ItemLoading";
import LocSanPham from "./LocSanPham";

const Search = () => {
  const listDanhMuc = useSelector((state) => state.danhMuc);
  const [searchParams] = useSearchParams();
  const [pageCount, setPageCount] = useState(1);
  const [loadingMore, setLoadingMore] = useState({
    isLoading: false,
    isHasLoadMore: false,
    isEndLoadMore: false,
  });
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filterValue, setFilterValue] = useState("-giaTien");
  const [searchQuery, setSearchValue] = useState("");
  const [loaiDanhMuc, setLoaiDanhMuc] = useState("all");
  const [listSanPham, setListSanPham] = useState([]);

  useEffect(() => {
    setSearchValue(searchParams.get("query"));
    window.scrollTo(0, 0);
  }, [searchParams]);
  const callDataApi = async (searchQuery, loaiDanhMuc, filterValue) => {
    const results = await axios.get(
      `${process.env.REACT_APP_ENDPOINT_SERVER}/api/v1/sanpham/search/?query=${searchQuery}&results=${itemsPerPage}&loaiDanhMuc=${loaiDanhMuc}&sorts=${filterValue}`
    );

    return results.data;
  };
  const getListQuery = useQuery(
    ["get-all-sanpham-by-search-ten", searchQuery, loaiDanhMuc, filterValue],
    () => callDataApi(searchQuery, loaiDanhMuc, filterValue),
    {
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );
  useEffect(() => {
    setLoadingMore((prev) => ({
      ...prev,
      isLoading: false,
      isHasLoadMore: false,
      isEndLoadMore: false,
    }));
    setListSanPham([]);
    setPageCount(1);
  }, [filterValue, loaiDanhMuc, searchQuery]);
  const {
    data,
    isLoading,
    isFetching,
    isError: isErrorQuery,
    error,
    isSuccess,
  } = getListQuery;
  useEffect(() => {
    if (error && error.response) {
      toast.error(error.response.data.message);
    }
  }, [isErrorQuery]);
  useEffect(() => {
    if (data) {
      if (data.results === itemsPerPage) {
        setLoadingMore((prev) => ({
          ...prev,
          isHasLoadMore: true,
          isEndLoadMore: false,
        }));
        setPageCount((prev) => prev + 1);
      } else {
        setLoadingMore((prev) => ({
          ...prev,
          isHasLoadMore: false,
          isEndLoadMore: true,
        }));
      }

      setListSanPham(data.data);
    }
  }, [data]);
  useEffect(() => {
    if (searchQuery) {
      document.title = `Tìm kiếm sản phẩm ${searchQuery} | CellPhoneZ`;
    }
  }, [searchQuery]);

  const handleClickLoadMore = async () => {
    try {
      setLoadingMore((prev) => ({
        ...prev,
        isHasLoadMore: false,
        isLoading: true,
      }));
      const results = await axios.get(
        `${process.env.REACT_APP_ENDPOINT_SERVER}/api/v1/sanpham/search/?query=${searchQuery}&page=${pageCount}&results=${itemsPerPage}&loaiDanhMuc=${loaiDanhMuc}&sorts=${filterValue}`
      );
      if (results.data.results === itemsPerPage) {
        setLoadingMore((prev) => ({
          ...prev,
          isHasLoadMore: true,
          isLoading: false,
          isEndLoadMore: false,
        }));
        setPageCount((prev) => prev + 1);
      } else {
        setLoadingMore((prev) => ({
          ...prev,
          isHasLoadMore: false,
          isLoading: false,
          isEndLoadMore: true,
        }));
      }

      setListSanPham((prev) => [...prev, ...results.data.data]);
    } catch (err) {
      toast.error(err.response.data.message);
      setLoadingMore((prev) => ({
        ...prev,
        isHasLoadMore: false,
        isLoading: false,
      }));
    }
  };

  return (
    <>
      {loadingMore && loadingMore.isLoading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loadingMore.isLoading}
        >
          <CircularProgress
            sx={{
              color: "#d70018",
            }}
          />
        </Backdrop>
      )}

      <Box
        sx={{
          marginTop: "74px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
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
          <Typography
            sx={{
              color: "#707070",
              fontSize: "12px",
            }}
          >
            Tìm kiếm sản phẩm
          </Typography>

          <Typography
            sx={{
              color: "#707070",
              fontSize: "12px",
            }}
          >
            {searchQuery}
          </Typography>
        </Breadcrumbs>
        <Typography
          sx={{
            fontSize: "14px",
            color: "#707070",
            textAlign: "center",
          }}
        >
          Kết quả tìm kiếm cho từ khóa <b>"{searchQuery}"</b>
        </Typography>

        <LocSanPham
          setLoaiDanhMuc={setLoaiDanhMuc}
          loaiDanhMuc={loaiDanhMuc}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          listDanhMuc={listDanhMuc}
          isSearch={true}
        />

        <Box
          sx={{
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0,1fr))",
              sm: "repeat(3, minmax(0,1fr))",
              md: "repeat(4, minmax(0,1fr))",
              lg: "repeat(5, minmax(0,1fr))",
            },
            display: "grid",
            gap: "10px",
          }}
        >
          {isLoading &&
            Array.from({ length: 10 }).map((item, i) => (
              <ItemLoading key={i} />
            ))}
          {listSanPham.map((item, i) => (
            <Item key={i} data={item} />
          ))}
        </Box>
        {loadingMore && loadingMore.isHasLoadMore && (
          <Box
            onClick={() => handleClickLoadMore()}
            sx={{
              margin: "10px 0px",
              maxWidth: "335px",
              width: "100%",
              alignSelf: "center",
              textAlign: "center",
              backgroundColor: "#ffffff",
              fontSize: "14px",
              color: "#212529",
              borderRadius: "10px",
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
              Xem thêm
              <KeyboardArrowDownIcon />
            </Box>
          </Box>
        )}
        {loadingMore && loadingMore.isEndLoadMore && (
          <Box
            as={motion.div}
            initial={{ scale: 1 }}
            animate={{ scale: 1.02 }}
            sx={{
              border: "1px solid #d70018",
              background: "#fef2f2",
              boxShadow:
                "0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
              alignSelf: "center",
              color: "#212529",
              padding: "15px",
              borderRadius: "10px",
              fontSize: "16px",
            }}
          >
            Đã hết danh sách 👏🏼
          </Box>
        )}
      </Box>
    </>
  );
};
export default Search;
