import { combineReducers } from "redux";
import danhMucReducer from "./danhMuc";
export default combineReducers({ danhMuc: danhMucReducer });
