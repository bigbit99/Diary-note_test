import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";

function Diary_writeAll() {
    const userList = useSelector((state)=> state.users.value); 
    const navigate = useNavigate();

    return (
        <div >
            {userList.map((user) => {
                return (
                    <div >
                        <h1>{user.name}</h1>
                        <h1>{user.username}</h1>
                        <h1>{user.com}</h1>
                    </div>
                );
            })}
              <button onClick={()=>navigate('../diarydetail')}>자세히보기</button>
        </div>
    )
}


export default  Diary_writeAll