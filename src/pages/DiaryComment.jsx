import React, { useState }  from "react";
import Button from "../components/Button";
import {useSelector} from "react-redux"


function Diary_writeAll() {

    let comments = useSelector((state)=>{ return state.cmts})
    console.log(comments[0])


    const [title, setTitle] = useState("");
    const [content, setContent] = useState(""); 
         
    const addComment =  () => {
        return(console.log(1));
    }

    return (
        <div>
            <span>일기 댓글 페이지입니다.</span><br/>
            <br/>
            <input placeholder="이름(5자 이내)" type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} /> 
            <input placeholder="댓글을 추가하세요.(100자 이내)" type="text" value={content} onChange={(e)=> {setContent(e.target.value)}} />
            <Button onClick={addComment}>추가하기</Button>
            <br/>
            <br/>
            <div id="cards">                    
                {comments.map((comment) => (
                    <><span key={comment.id}>{comment.title}</span><br/><span>{comment.content}</span><br/></>
                ))}
            </div>
        </div>
    );
};


export default  Diary_writeAll