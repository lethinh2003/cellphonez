import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { themCartItem, themSoLuongCartItem } from "../../redux/actions/cart";
const ButtonHanhDong = ({ data }) => {
  const navigate = useNavigate();
  const [isExistCart, setIsExistCart] = useState(false);
  const listCartItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const checkCartExist = () => {
    const check = listCartItem.find((item) => item._id == data._id);
    return check;
  };
  const handleClickAddCart = () => {
    if (checkCartExist()) {
      toast.info("Số lượng + 1");
      dispatch(
        themSoLuongCartItem({
          itemID: data._id,
          soLuong: 1,
        })
      );
      return;
    }
    dispatch(themCartItem(data));
    toast.info("Thêm thành công vào giỏ hàng");
  };
  const handleClickMuaNgay = () => {
    if (checkCartExist()) {
      navigate("/cart");
      return;
    }
    dispatch(themCartItem(data));
    navigate("/cart");
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            onClick={() => handleClickMuaNgay()}
            sx={{
              cursor: "pointer",
              backgroundColor: "#f02a2d",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              flexDirection: "column",
              color: "#ffffff",
              flex: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Mua ngay
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              (Giao tận nơi hoặc lấy tại cửa hàng)
            </Typography>
          </Box>
          <Box
            onClick={() => handleClickAddCart()}
            sx={{
              cursor: "pointer",
              width: "60px",
              height: "60px",
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              border: "2px solid #e04040",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#e04040",
            }}
          >
            <AddShoppingCartIcon />
            <Typography
              sx={{
                fontSize: "7.5px",
              }}
            >
              Thêm vào giỏ
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
              backgroundColor: "#3679d5",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              flexDirection: "column",
              color: "#ffffff",
              flex: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Trả góp 0%
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              (Xét duyệt qua điện thoại)
            </Typography>
          </Box>
          <Box
            sx={{
              cursor: "pointer",
              backgroundColor: "#3679d5",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              flexDirection: "column",
              color: "#ffffff",
              flex: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Trả góp qua thẻ
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              (Visa, Mastercard, JCB)
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default ButtonHanhDong;
