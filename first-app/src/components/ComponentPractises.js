import Header from "./Header";
import VariableUsing from "./VariableUsing";

function Practises() {
    return (
        <div>
            <h1>Hello from React</h1>
            <Header/>
            <Header/>
            <Header/>
            <Header/>
            <label htmlFor="sample">
                Sample Label:
                <input id="sample"/>
            </label>
            <VariableUsing/>
        </div>
    )
}

export default Practises;