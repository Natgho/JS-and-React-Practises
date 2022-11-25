import React from 'react';
import User from "./User";
import UserWithArray from "./UserWithArray";
import Counter from "./Counter";

function AllBeforePractises(props) {
    return (
        <div>
            <User/>
            <UserWithArray/>
            <hr/>
            <Counter/>
        </div>
    );
}

export default AllBeforePractises;