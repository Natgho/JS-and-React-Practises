import React, {useState} from 'react';
import {useUser} from "../context/UserContext";

function Profile(props) {
    const {user, setUser} = useUser();
    const [login, setLogin] = useState(false)
    function handleLogin() {
        setLogin(true)
        setUser({name:'Sezer', surname:'Bozkir'})
    }
    function handleLogout() {
        setLogin(false)
        setUser(null)
    }

    return (
        <div>
            <span>User: {JSON.stringify(user)}</span>
            <br/>
            {!login ? <button onClick={handleLogin}>Login</button> : <button onClick={handleLogout}>Logout</button>}
        </div>
    );
}

export default Profile;