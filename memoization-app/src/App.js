import './App.css';
import {useMemo, useState} from "react";
import Header from "./components/Header";

function App() {
    const [number, setNumber] = useState(0)
    const [text, setText] = useState("")
    // every rendering it will re-calculate
    // const data = prepareObject()
    const data = useMemo(() => {
        return prepareObject()
    }, [])
    return (
        <div className="App">
            <Header data={data}/>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Increase</button>
            <input type="text" value={text} onChange={(value) => setText(value.target.value)}/>
            <code>
                <pre>
                    {JSON.stringify(data)}
                </pre>
            </code>
        </div>
    );
}

function prepareObject() {
    console.log("calculating...")
    for (let i = 0; i < 100000; i++) {

    }
    console.log("calculated...")
    return {name: 'Sezer', surname: 'Bozkir'}
}

export default App;
