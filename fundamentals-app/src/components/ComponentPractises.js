import Header from "./Header";
import VariableUsing from "./VariableUsing";
import UserwithProps from "./UserwithProps";
import UserWithParameterizedProps from "./UserWithParameterizedProps";

const name = "Sezer"
const surname = "Bozkir"
const loggedIn = true

function Practises() {
    return (
        <div>
            <h1>Hello from React</h1>
            <Header/>
            <Header/>
            <label htmlFor="sample">
                Sample Label:
                <input id="sample"/>
            </label>
            <VariableUsing/>

            <p>{loggedIn && `Hello ${name} ${surname}, welcome on board!`}</p>
            <p>{!loggedIn && "Hello anonymous user!"}</p>
            <p> {loggedIn ? `Hello ${name} ${surname}, welcome on board!` : "Hello anonymous user!"}</p>

            <UserwithProps name={"Sezer"} surname={"Bozkir"} isLoggedIn={true}/>
            <UserwithProps name={"Sezer"} surname={"Bozkir"} isLoggedIn={false}/>
            <UserWithParameterizedProps name={"Sezer"} surname={"Bozkir"} isLoggedIn={true} friends={friends}/>
            <UserWithParameterizedProps name={"Sezer"} surname={"Bozkir"} isLoggedIn={false} friends={friends}/>
        </div>
    )
}

export default Practises;