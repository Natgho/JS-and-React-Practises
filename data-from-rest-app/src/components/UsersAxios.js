import React, {useEffect, useState} from 'react';
import axios from "axios";

function UsersAxios() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users").then(resp => {
            setUsers(resp.data)
        }).catch((e) => console.log(e)).finally(() => setIsLoading(false))
    }, [])
    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {users.map((user) => <div key={user.id}>{user.name}</div>)}
        </div>
    );
}

export default UsersAxios;