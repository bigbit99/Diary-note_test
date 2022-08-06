import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
// import { addNumber, minusNumber } from "../redux/modules/detailSlice";

function Diary_writeAll() {
    const dispatch = useDispatch();

    //다이어리 붙이기
    const getDiary = useSelector((state)=>state.diary)
    console.log(getDiary)


    //다이어리 수정하기 
    const [edited, setEdited] = useState(false);

    //버튼 변경 수정 → 저장 
    // const onClickEditBtn = () => {
    //     setEdited(true);
    // };

    return (
        <div>
            <div>
                {getDiary.diary.map((diary)=>{
                    return(
                        <>
                            <Link to="/diarywriteall">뒤로가기</Link>
                            <p>{diary.id}</p>
                            <p>{diary.title}</p>
                            <p>{diary.body}</p>
                            
                            {/* (<button 
                                type="button"
                                onClick={()=>{onClickEditBtn}}>수정</button>) */}

                            <button>저장</button>
                        
                        </>
                    )
                })
                    
                }
            </div>
        </div>
    )
}


export default Diary_writeAll