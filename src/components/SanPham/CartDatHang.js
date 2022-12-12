import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setCartItem } from "../../redux/actions/cart";
const CartDatHang = ({ tongTien, listCart, setIsDatHang }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const hoTenRef = useRef();
  const soDienThoaiRef = useRef();
  const emailRef = useRef();
  const diaChiNhanHangRef = useRef();

  const Container = styled(Box)({
    width: "100%",
    borderRadius: "15px",

    padding: "10px",
    fontSize: "14px",
    gap: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow:
      "0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
  });
  const handleClickDatHang = async () => {
    try {
      setIsLoading(true);
      const hoTen = hoTenRef.current.value;
      const soDienThoai = soDienThoaiRef.current.value;
      const email = emailRef.current.value;
      const diaChiNhanHang = diaChiNhanHangRef.current.value;

      if (listCart.length === 0) {
        toast.error("Vui lòng chọn sản phẩm trước khi đặt hàng");
        setIsLoading(false);
        setIsDatHang(false);
        return;
      }
      if (!hoTen || !soDienThoai || !diaChiNhanHang) {
        toast.error("Vui lòng nhập đầy đủ thông tin");
        setIsLoading(false);
        return;
      }
      const danhSachSanPham = listCart.map((item) => ({
        sanPham: item._id,
        soLuong: item.soLuong,
      }));
      const res = await axios.post(
        `${process.env.REACT_APP_ENDPOINT_SERVER}/api/v1/donhang`,
        {
          hoTen,
          soDienThoai,
          diaChiNhanHang,
          email,
          giaTien: tongTien,
          danhSachSanPham,
        }
      );
      setIsLoading(false);
      alert(`Đặt hàng thành công, mã đơn hàng: ${res.data.data._id}`);
      toast.info("Đặt hàng thành công");
      dispatch(setCartItem([]));
      setIsDatHang(false);
    } catch (err) {
      setIsLoading(false);
      if (err.response) {
        toast.error(err.response.data.message);
      }
    }
  };

  return (
    <>
      {isLoading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress
            sx={{
              color: "#d70018",
            }}
          />
        </Backdrop>
      )}

      <Container>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              color: "#0e2431",
              fontWeight: "bold",
            }}
          >
            Thông tin khách hàng
          </Typography>

          <Form.Group>
            <Form.Label>Họ và tên</Form.Label>
            <Form.Control
              ref={hoTenRef}
              type="text"
              placeholder="Họ và tên (bắt buộc)"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              type="text"
              ref={soDienThoaiRef}
              placeholder="Số điện thoại (bắt buộc)"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control ref={emailRef} type="text" placeholder="Email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Địa chỉ nhận hàng</Form.Label>
            <Form.Control
              ref={diaChiNhanHangRef}
              as="textarea"
              rows={3}
              placeholder="Địa chỉ nhận hàng (bắc buộc)"
            />
          </Form.Group>
          <Box
            onClick={() => handleClickDatHang()}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "uppercase",
              background: "#d70018",
              borderRadius: "10px",
              padding: "10px",
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Xác nhận đặt hàng
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default CartDatHang;
