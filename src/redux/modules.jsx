// import { createSlice, current } from '@reduxjs/toolkit'


// let cmtSlice = createSlice({
    
//     reducers : {      
//       addComment: (state, action)=>{
//         state = state.push(action.payload)
//       }, 

//       delComment: (state, action)=>{
//         const newDelCmt = current(state).filter((del)=> 
//        {return del.id !== action.payload}
//        )
//        return newDelCmt
//       }
//     }
//   });



// export const { addComment, delComment, changeComment } = cmtSlice.actions;