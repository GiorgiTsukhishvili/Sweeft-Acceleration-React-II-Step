import usersReducer from "../reducers";
import { createStore } from "redux";

const store = createStore(usersReducer);

export default store;
