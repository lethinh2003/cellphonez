import { SET_IS_OPEN_DANH_MUC } from "./constant";
const setIsOpenDanhMuc = (value) => {
  return {
    type: SET_IS_OPEN_DANH_MUC,
    data: value,
  };
};
export { setIsOpenDanhMuc };
