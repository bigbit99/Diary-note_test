import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from '../redux/Users';
import { useNavigate } from  'react-router-dom' 
import { Button } from '../components/Button.styled'

function Diary_write() {
    const dispatch = useDispatch();
    const userList = useSelector((state)=> state.users.value); 
    const navigate = useNavigate();

    console.log(userList)
    
    const [name, setName] = useState("");
    const [username, setuserName] = useState("");
    const [com, setcomment] = useState("");



    return (
    <div className="box">
        <div className="boxname">작성자
            <input 
            type="text"  
            placeholder="작성자의 이름을 입력해주세요.(5자 이내)" 
            onChange={(event)=>{
                setName(event.target.value)
            }}/>


        </div>
        <div className="boxtitle">제목
        <input 
            type="text"  
            placeholder="제목을 입력해주세요.(10자 이상)"
            onChange={(event)=>{
                setuserName(event.target.value)
            }}/>
        </div>
        <div className="boxcomment">
            내용
            <input 
            type="text"  
            placeholder="제목을 입력해주세요.(10자 이상)"
            onChange={(event)=>{
                setcomment(event.target.value)
            }}/>
            
            
        </div>
        <button onClick={()=>{dispatch(addUser({
            id: userList[userList.length - 1].id + 1,
            name,
            username,
            com
            })
        )}}>Add</button>
  
          <Button onClick={()=>navigate('../diarywriteAll')}>일기 보러가기</Button>
    </div>
  

    )
}


export default  Diary_write