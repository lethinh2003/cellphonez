import {
  SET_CART_ITEM,
  THEM_CART_ITEM,
  THEM_SO_LUONG_CART_ITEM,
  XOA_CART_ITEM,
} from "./constant";
const setCartItem = (value) => {
  return {
    type: SET_CART_ITEM,
    data: value,
  };
};
const themCartItem = (value) => {
  return {
    type: THEM_CART_ITEM,
    data: value,
  };
};
const themSoLuongCartItem = (value) => {
  return {
    type: THEM_SO_LUONG_CART_ITEM,
    data: value,
  };
};
const xoaCartItem = (value) => {
  return {
    type: XOA_CART_ITEM,
    data: value,
  };
};
export { setCartItem, themCartItem, xoaCartItem, themSoLuongCartItem };
