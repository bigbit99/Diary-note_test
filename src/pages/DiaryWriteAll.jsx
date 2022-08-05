import { useSelector } from "react-redux";

function Diary_writeAll() {
    const userList = useSelector((state)=> state.users.value); 

    return (
        <div>
            {userList.map((user) => {
                return (
                    <div >
                        <h1>{user.name}</h1>
                        <h1>{user.username}</h1>
                        <h1>{user.com}</h1>
                    </div>
                );
            })}
        </div>
    )
}


export default  Diary_writeAll