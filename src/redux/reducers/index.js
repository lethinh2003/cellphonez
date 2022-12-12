import { combineReducers } from "redux";
import cartReducer from "./cart";
import danhMucReducer from "./danhMuc";
import danhSachYeuThichReducer from "./danhSachYeuThich";
import openDanhMucReducer from "./openDanhMuc";
export default combineReducers({
  danhMuc: danhMucReducer,
  danhSachYeuThich: danhSachYeuThichReducer,
  cart: cartReducer,
  isOpenDanhMuc: openDanhMucReducer,
});
