import { SET_DANH_MUC } from "../actions/constant";
const initialState = [];
const danhMucReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DANH_MUC:
      return action.data;

    default:
      return state;
  }
};
export default danhMucReducer;
