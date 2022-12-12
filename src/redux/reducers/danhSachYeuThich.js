import {
  SET_DANH_SACH_YEU_THICH,
  THEM_DANH_SACH_YEU_THICH,
  XOA_DANH_SACH_YEU_THICH,
} from "../actions/constant";
const initialState = localStorage.getItem("danhSachYeuThich")
  ? JSON.parse(localStorage.getItem("danhSachYeuThich"))
  : [];

const danhSachYeuThichReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DANH_SACH_YEU_THICH:
      localStorage.setItem("danhSachYeuThich", JSON.stringify(action.data));
      return action.data;
    case THEM_DANH_SACH_YEU_THICH:
      localStorage.setItem(
        "danhSachYeuThich",
        JSON.stringify([...state, action.data])
      );

      return [...state, action.data];
    case XOA_DANH_SACH_YEU_THICH:
      const filterData = state.filter((item) => item !== action.data);
      localStorage.setItem("danhSachYeuThich", JSON.stringify(filterData));

      return filterData;

    default:
      return state;
  }
};
export default danhSachYeuThichReducer;
