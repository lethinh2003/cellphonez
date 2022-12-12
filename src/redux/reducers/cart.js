import {
  SET_CART_ITEM,
  THEM_CART_ITEM,
  THEM_SO_LUONG_CART_ITEM,
  XOA_CART_ITEM,
} from "../actions/constant";
const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_ITEM:
      localStorage.setItem("cart", JSON.stringify(action.data));
      return action.data;
    case THEM_CART_ITEM:
      let newData = action.data;
      newData = { ...newData, soLuong: 1 };

      localStorage.setItem("cart", JSON.stringify([...state, newData]));

      return [...state, newData];
    case THEM_SO_LUONG_CART_ITEM:
      const { itemID, soLuong } = action.data;
      console.log(itemID, soLuong);
      const checkExist = state.find((item) => item._id == itemID);
      if (!checkExist) {
        return state;
      }
      let indexItem = -1;
      const findIndexItem = () => {
        state.map((item, i) => {
          if (item._id == action.data.itemID) {
            indexItem = i;
          }
        });
      };
      findIndexItem();
      if (indexItem === -1) {
        return state;
      }
      let getCurrentItem = state[indexItem];
      console.log(getCurrentItem);
      getCurrentItem = {
        ...getCurrentItem,
        soLuong: getCurrentItem.soLuong + soLuong,
      };
      state[indexItem] = getCurrentItem;
      console.log("after", state);
      localStorage.setItem("cart", JSON.stringify(state));

      return state;
    case XOA_CART_ITEM:
      const filterData = state.filter((item) => item._id !== action.data);
      localStorage.setItem("cart", JSON.stringify(filterData));

      return filterData;

    default:
      return state;
  }
};
export default cartReducer;
