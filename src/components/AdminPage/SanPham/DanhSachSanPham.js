import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Skeleton, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const DanhSachSanPham = () => {
  const [sanPham, setSanPham] = useState([]);

  const callDataApi = async () => {
    const results = await axios.get(
      `${process.env.REACT_APP_ENDPOINT_SERVER}/api/v1/sanpham`
    );
    return results.data;
  };
  const getListQuery = useQuery("get-admin-sanpham", callDataApi, {
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
    if (error && error.response) {
      toast.error(error.response.data.message);
    }
  }, [isErrorQuery]);
  useEffect(() => {
    if (dataQuery && dataQuery.data.length > 0) {
      const newData = dataQuery.data.map((item, i) => ({
        id: item._id,
        stt: i + 1,
        tenSanPham: item.tenSanPham,
        giaTien: item.giaTien,
        giaHienTai: item.giaTien - (item.giaTien * item.giamGia) / 100,
        giamGia: item.giamGia,
        isSale: item.isSale,
        slug: item.slug,
        danhMuc: item.danhMuc,
        hang: item.hang,
      }));

      setSanPham(newData);
    }
  }, [dataQuery]);
  const GridRowsProp = sanPham;

  const GridColDef = [
    { field: "stt", headerName: "STT", width: 100 },
    {
      field: "tenSanPham",
      headerName: "Tên sản phẩm",
      minWidth: 400,
      maxWidth: 2000,
    },
    {
      field: "danhMuc",
      headerName: "Danh mục",
      width: 130,
      renderCell: (params) => (
        <Typography>{params.value.tenDanhMuc}</Typography>
      ),
    },
    {
      field: "hang",
      headerName: "Hãng",
      width: 130,
    },
    {
      field: "giaTien",
      headerName: "Giá niêm yết",
      width: 200,
      renderCell: (params) => (
        <NumericFormat
          value={params.value}
          displayType={"text"}
          thousandSeparator={"."}
          decimalSeparator={","}
          suffix={" VNĐ"}
        />
      ),
    },
    {
      field: "giamGia",
      headerName: "Giảm giá",
      width: 100,
      renderCell: (params) => <Typography>{params.value}%</Typography>,
    },
    {
      field: "giaHienTai",
      headerName: "Giá hiện tại",
      width: 200,
      renderCell: (params) => (
        <NumericFormat
          value={params.value}
          displayType={"text"}
          thousandSeparator={"."}
          decimalSeparator={","}
          suffix={" VNĐ"}
        />
      ),
    },
    {
      field: "isSale",
      headerName: "Hot Sale",
      width: 100,
      renderCell: (params) => (
        <Typography>{params.value ? "Có" : "Không"}</Typography>
      ),
    },

    {
      field: "slug",
      headerName: "Link",
      width: 200,
      renderCell: (params) => (
        <a
          href={`/sanpham/${params.value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
          >
            Truy cập
          </Button>
        </a>
      ),
    },
    {
      field: "action",
      headerName: "Thao tác",
      type: "actions",
      width: 150,
      getActions: (params) => [
        <Link to={`${params.id}`}>
          <EditIcon />
        </Link>,
      ],
    },
  ];
  return (
    <>
      <Box
        sx={{
          gap: "20px",
          width: "100%",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "0px 0px 12px 1px #e2e2e2",
        }}
      >
        <div style={{ height: 500, width: "100%" }}>
          {isLoading && (
            <>
              {Array.from({ length: 5 }).map((item, i) => (
                <Box key={i} sx={{ marginTop: "10px" }}>
                  <Skeleton variant="rectangular" height={50} />
                </Box>
              ))}
            </>
          )}
          {!isLoading && (
            <DataGrid
              rows={GridRowsProp}
              columns={GridColDef}
              components={{ Toolbar: GridToolbar }}
            />
          )}
        </div>
      </Box>
    </>
  );
};
export default DanhSachSanPham;
