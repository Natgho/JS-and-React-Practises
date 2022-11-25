import React, {useState} from 'react';

function FormPrototype() {
    const [userForm, userFormUpdater] = useState({name: "", surname: ""})
    const formDataUpdater = (e) => {
        userFormUpdater({...userForm, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" onChange={formDataUpdater}/>
            <br/>
            <br/>
            <label htmlFor="surname">Surname: </label>
            <input type="text" name="surname" onChange={formDataUpdater}/>
            <br/>
            {userForm.name} {userForm.surname}
        </div>
    );
}

export default FormPrototype;