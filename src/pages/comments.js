import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: [
        {
            id: 1, 
            title: "리덕스툴킷", 
            content: "리덕스툴킷 사용법을 알아보자."
        }, 
        {
            id: 2, 
            title: "심화주", 
            content: "협업과제를 마무리 하자."
        }, 
        {
            id: 3, 
            title: "강의를 마스터하자", 
            content: "강의를 완강해보자."
        },
    ],
};

export const commentSlice = createSlice({
  name: "myCmt",
  initialState,
  reducers: {
    newComments(state, action){
        state.comments = [action.payload];
    },
  },
});
console.log(commentSlice)
export const { newComments } = commentSlice.actions;
export default commentSlice.reducer;