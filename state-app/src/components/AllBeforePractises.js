import React from 'react';
import User from "./User";
import UserWithArray from "./UserWithArray";
import Counter from "./Counter";
import FormPrototype from "./FormPrototype";

function AllBeforePractises(props) {
    return (
        <div>
            <User/>
            <UserWithArray/>
            <hr/>
            <Counter/>
            <hr/>
            <FormPrototype/>
        </div>
    );
}

export default AllBeforePractises;