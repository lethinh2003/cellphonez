import { SET_DANH_MUC } from "./constant";
const setDanhMuc = (value) => {
  return {
    type: SET_DANH_MUC,
    data: value,
  };
};
export { setDanhMuc };
