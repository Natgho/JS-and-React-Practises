import Header from './components/Header'
import VariableUsing from "./components/VariableUsing";
import Practises from "./components/ComponentPractises";

const name = "Sezer"
const surname = "Bozkir"
const loggedIn = true

function App() {
    return (
        <div>
            <Practises/>
            <p>{ loggedIn && `Hello ${name} ${surname}, welcome on board!`}</p>
            <p>{ !loggedIn && "Hello anonymous user!"}</p>
            <p> {loggedIn ? `Hello ${name} ${surname}, welcome on board!` : "Hello anonymous user!"}</p>

        </div>
    )
}

export default App;