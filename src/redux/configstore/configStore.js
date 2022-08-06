import { configureStore } from "@reduxjs/toolkit";
// import {diary, counter} from "./modules/detailSlice";
// import counter from "./modules/detailSlice";
import diaryReducer from '../modules/detailSlice';

const store = configureStore({
  reducer: {
		diary: diaryReducer,

  },
});

export default store;