import Header from "./Header";
import VariableUsing from "./VariableUsing";

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
        </div>
    )
}

export default Practises;