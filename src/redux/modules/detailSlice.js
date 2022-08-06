import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  // number:0,
  diary: [{
        id: 0,
        title:"첫번째 일기",
        body:"내용이 들어가는곳! 여기를 수정해야지 ~,~",
        username:"한빛",
      }]
}

export const diarySlice = createSlice({ //createSlice는 객체를 매개변수로 받는다
  name:"diary",
  initialState,
  reducers: {
     //리듀서 안에 만든 함수 자체가 리듀서 로직이가, action creator가 된다! 
    getDiary(state, action) {
      state.diary.push(action.payload.data)
      //→ state에 있는 diary의 값을 payload의 데이터로 바꿔준다. 이 payload는 action에서 온다
    }
  }
})

export const { getDiary } = diarySlice.actions;
export default diarySlice.reducer;