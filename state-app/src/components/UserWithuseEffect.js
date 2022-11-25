import React, {useEffect, useState} from 'react';

function UserWithUseEffect() {
    const [name, SetName] = useState("Sezer")
    const [age, setAge] = useState(25)
    const [userTimer, setUserTimer] = useState(0)

    useEffect(()=> {
        console.log("UserWithUseEffect component moounted.")
        const timer = setInterval(()=> {
            setUserTimer((val)=> val+1);
        }, 1000);
        return () => {
            console.log("Component destroyed");
            clearInterval(timer);
        };
    }, [])

    useEffect(() => {
        console.log("Age updated")
    }, [age])
    return (
        <div>
            <div>Name: {name} Age:{age}</div>
            <div>
                <button onClick={() => setAge(age + 1)}>Increase Age</button>
            </div>
            <hr/>
            <div>Timer: {userTimer}</div>
        </div>
    );
}

export default UserWithUseEffect;