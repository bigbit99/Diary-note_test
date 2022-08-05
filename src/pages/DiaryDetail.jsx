import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { addNumber, minusNumber } from "../redux/modules/diarydetail";

function Diary_writeAll() {
    const dispatch = useDispatch();
    const [number, setNumber] = useState(0);

    const globalNumber = useSelector((state) => state.counter.number)
    
    return (
        <div>
            <div>
                <Link to="/diarywriteall">뒤로가기</Link>
                <p>id 값 보여주기</p>
                <p>제목보여주기:title</p>
                <p>내용보여주기:content</p>
                <button>수정하기</button>


                {/* 더하기빼기 테스트*/}
                <div>{globalNumber}</div> 
                <input type="number" onChange={(e)=> {setNumber(+(e.target.value))}} />
                <button  onClick={() => dispatch(addNumber(number))}>더하기</button>
                <button  onClick={() => dispatch(minusNumber(number))}>빼기</button>
            </div>
        </div>
    )
}


export default Diary_writeAll