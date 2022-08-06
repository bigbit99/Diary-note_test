import React, { useState }  from "react";
import {useSelector, useDispatch} from "react-redux";
import { addComment } from "../redux/modules";



function Diary_writeAll() {

    const comments = useSelector((state)=> state.cmt)
    console.log(comments)


    const [title, setTitle] = useState("");
    const [content, setContent] = useState(""); 
    const dispatch = useDispatch();
         


    return (
        <div>
            <span>일기 댓글 페이지입니다.</span><br/>
            <br/>
            <input placeholder="이름(5자 이내)" type="text"  onChange={(e)=>{setTitle(e.target.value)}} /> 
            <input placeholder="댓글을 추가하세요.(100자 이내)" type="text"  onChange={(e)=> {setContent(e.target.value)}} />
            <button onClick={()=>{dispatch(addComment({id: 0, title, content}))}}>추가하기</button>
            <br/>
            <br/>
            <div id="cards">                    
                {comments.map((comment) => {return(
                    <div key={comment.id}><h1>{comment.title}</h1><br/><h1>{comment.content}</h1><br/></div>
                )})}
            </div>
        </div>
    );
};


export default  Diary_writeAll