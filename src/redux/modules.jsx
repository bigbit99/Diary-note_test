import { configureStore, createSlice } from '@reduxjs/toolkit'



let cmtSlice = createSlice({
    name : 'cmtSlice',
    initialState : [{
        id : 1,
        title : "리덕스",
        content : "내용을 써보자"
        },

        { id : 2,
        title : "과제",
        content : "일기를 만들자"
        },
    ],
    reducers:{      
      addComment: (state, action)=>{
        state = [state.push(action.payload)]
      },
      
      delComment: (state, action)=>{
        console.log(state)
      }
    }})


const store = configureStore({
  reducer: { 
     cmt : cmtSlice.reducer
    }
   
}) 

export const { addComment } = cmtSlice.actions;
export default store;