import { combineReducers, createStore } from "redux";
import { medalList } from "../modules/medalList";

const rootReducer = combineReducers({
  medalList,
});

const store = createStore(rootReducer);

export default store;
