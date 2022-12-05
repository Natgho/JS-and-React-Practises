import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, Outlet} from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then(res => setUsers(res.data))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            <h1>Users:</h1>
            {loading && <div>Loading...</div>}
            <ul>{!loading && users.map((user) => {
                return <li key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                </li>
            })}
            </ul>
            <Outlet/>
        </div>
    );
}

export default Users;