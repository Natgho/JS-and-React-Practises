import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

function User() {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const {userid} = useParams()
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${userid}`)
            .then(res => setUser(res.data))
            .finally(() => setLoading(false))
    }, [userid])
    return (
        <div>
            {loading && <div>Loading...</div>}
            {!loading &&
                <div>
                    <pre>{JSON.stringify(user, null, 2)}</pre>
                </div>
            }
            <Link to={`/user/${parseInt(userid)+1}`}>Next User ({parseInt(userid) + 1})</Link>
        </div>
    );
}

export default User;