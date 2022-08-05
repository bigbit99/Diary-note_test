import React, { useState }  from "react";
import Button from "../components/Button";


function Diary_writeAll() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState(""); 
         
    const addComent =  () => {
        return(console.log(1));
    }

    return (
        <div>
            <span>일기 댓글 페이지입니다.</span><br/>
            <br/>
            <input placeholder="이름(5자 이내)" type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} /> 
            <input placeholder="댓글을 추가하세요.(100자 이내)" type="text" value={content} onChange={(e)=> {setContent(e.target.value)}} />
            <Button onClick={addComent}>추가하기</Button>
            <br/>
            <br/>
            <div id="cards">
               
            </div>
        </div>
    );
};


export default  Diary_writeAll