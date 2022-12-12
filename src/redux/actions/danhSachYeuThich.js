import {
  SET_DANH_SACH_YEU_THICH,
  THEM_DANH_SACH_YEU_THICH,
  XOA_DANH_SACH_YEU_THICH,
} from "./constant";
const setDanhSachYeuThich = (value) => {
  return {
    type: SET_DANH_SACH_YEU_THICH,
    data: value,
  };
};
const themDanhSachYeuThich = (value) => {
  return {
    type: THEM_DANH_SACH_YEU_THICH,
    data: value,
  };
};
const xoaDanhSachYeuThich = (value) => {
  return {
    type: XOA_DANH_SACH_YEU_THICH,
    data: value,
  };
};
export { setDanhSachYeuThich, themDanhSachYeuThich, xoaDanhSachYeuThich };
