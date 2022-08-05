import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addUser} from '../redux/Users';


function Diary_write() {
    const dispatch = useDispatch();
    const userList = useSelector((state)=> state.users.value); 
    console.log(userList)

    const [name, setName] = useState("");
    const [username, setuserName] = useState("");
    const [com, setcomment] = useState("");

    return (
    <div>
        <div>작성자
            <input 
            type="text"  
            placeholder="작성자의 이름을 입력해주세요.(5자 이내)" 
            onChange={(event)=>{
                setName(event.target.value)
            }}/>
        </div>
        <div>제목
        <input 
            type="text"  
            placeholder="제목을 입력해주세요.(10자 이상)"
            onChange={(event)=>{
                setuserName(event.target.value)
            }}/>
        </div>
        <div>
            내용
            <input 
            type="text"  
            placeholder="제목을 입력해주세요.(10자 이상)"
            onChange={(event)=>{
                setcomment(event.target.value)
            }}/>
            
            
        </div>
        <button onClick={()=>{
            dispatch(addUser({id:0,
             name,
             username,com
             }))}}>Add</button>
        <dic>
            {userList.map((user) => {
                return (
                    <div >
                        <h1>{user.name}</h1>
                        <h1>{user.username}</h1>
                        <h1>{user.com}</h1>
                    </div>
                );
            })}
        </dic>
            
    </div>
    )
}


export default  Diary_write