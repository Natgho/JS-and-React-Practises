function UserwithProps(props) {
    return (
        <div>{props.isLoggedIn ? `Hello ${props.name} ${props.surname}` : "Hello Anonym User!"}</div>
    )
}
export default UserwithProps;