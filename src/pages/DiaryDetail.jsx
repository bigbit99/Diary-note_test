import React from 'react';
import {useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';

function Diary_writeAll() {

    //const {diary} = useSelector((state)=>state.diary)
    //const {id} = useParams()

    return (
        <div>
            <div>
                <p>뒤로가기</p>
                <p>id 값 보여주기</p>
                <p>제목보여주기:title</p>
                <p>내용보여주기:content</p>
                <button>수정하기</button>
                <button>수정하기2</button>
            </div>
        </div>
    )
}


export default  Diary_writeAll