import PropTypes from 'prop-types';

function UserWithPropTypes({name, surname, age, address, isLoggedIn, friends}) {
    if (!isLoggedIn)
        return <div>Hello Anonym User!</div>
    return (
        <div>
            <p>Hello {name} {surname} ({age ? age : ""})</p>
            <p>Address Info: Hello {address.title} - {address.zipcode}</p>
            <p>Sezers Friends:</p>
            {
                friends.map((friend) => (
                    <div key={friend.id}><b>{friend.name}</b></div>
                ))
            }
        </div>

    )
}

UserWithPropTypes.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    address: PropTypes.shape({
        title: PropTypes.string,
        zipcode: PropTypes.number
    }),
    isLoggedIn: PropTypes.bool.isRequired,
    friends: PropTypes.array.isRequired
}

UserWithPropTypes.defaultProps = {
    name: "John",
    surname: "Doe"
}
export default UserWithPropTypes;