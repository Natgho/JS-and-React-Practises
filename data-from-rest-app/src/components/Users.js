import React, {useEffect, useState} from 'react';

function Users() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(data => data.json()).then(usersData => {
            setUsers(usersData)
        }).catch((e)=>console.log(e)).finally(() => setIsLoading(false))
    }, [])
    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {users.map((user) => <div key={user.id}>{user.name}</div>)}
        </div>
    );
}

export default Users;