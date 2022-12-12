import { SET_IS_OPEN_DANH_MUC } from "../actions/constant";
const initialState = false;
const openDanhMucReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_OPEN_DANH_MUC:
      return action.data;

    default:
      return state;
  }
};
export default openDanhMucReducer;
