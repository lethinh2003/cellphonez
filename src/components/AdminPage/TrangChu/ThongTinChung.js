import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Box } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import ThongTinChungItem from "./ThongTinChungItem";

const ThongTinChung = () => {
  const callDataApi = async () => {
    const results = await axios.get(
      `${process.env.REACT_APP_ENDPOINT_SERVER}/api/v1/admin/overview`
    );
    return results.data;
  };
  const getListQuery = useQuery(["get-admin-overview"], () => callDataApi(), {
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });
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
  return (
    <>
      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "repeat(1, minmax(0,1fr))",
            sm: "repeat(2, minmax(0,1fr))",
            md: "repeat(3, minmax(0,1fr))",
          },
          gap: "20px",
          width: "100%",
        }}
      >
        {data && data.data && (
          <>
            <ThongTinChungItem
              title={"Sản phẩm"}
              desc={"Tất cả sản phẩm"}
              icon={<ShoppingBagIcon />}
              soluong={data.data[0].value}
              color1={"#ffbd96"}
              color2={"#ff8fab"}
            />
            <ThongTinChungItem
              title={"Đơn hàng"}
              desc={"Tất cả đơn hàng"}
              icon={<LocalShippingIcon />}
              soluong={data.data[2].value}
              color1={"#8cc8f9"}
              color2={"#3899e6"}
            />
            <ThongTinChungItem
              title={"Sản phẩm Sale"}
              desc={"Tất cả sản phẩm đang sale"}
              icon={<TrendingDownIcon />}
              soluong={data.data[1].value}
              color1={"#81d9d2"}
              color2={"#3bd8bf"}
            />
          </>
        )}
      </Box>
    </>
  );
};
export default ThongTinChung;
