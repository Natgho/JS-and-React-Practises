function UserWithParameterizedProps({name, surname, isLoggedIn, friends}) {
    return (
        <div>
            <p>{isLoggedIn ? `Hello ${name} ${surname}` : "Hello Anonym User!"}</p>
            <p>Sezers Friends:</p>
            {
                friends.map((friend) => (
                    <div key={friend.id}><b>{friend.name}</b></div>
                ))
            }
        </div>

    )
}

export default UserWithParameterizedProps;