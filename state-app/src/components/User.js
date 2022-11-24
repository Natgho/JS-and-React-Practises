import {useState} from "react";

function User() {
    const [user, setUser] = useState('Sezer')
    return (
        <div>
            <p>User: <b>{user}</b></p>
            <button onClick={() => {
                setUser("Mehmet")
            }}>Change User
            </button>
        </div>
    )
}

export default User;