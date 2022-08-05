import { configureStore } from "@reduxjs/toolkit";
import counter from "../modules/diarydetail";

const store = configureStore({
  reducer: {
		counter,
  },
});

export default store;