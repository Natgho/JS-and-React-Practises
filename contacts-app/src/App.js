import './App.css';
import Contact from "./components/Contact";
import {useState} from "react";

const testData = [
    {name: 'Mehmet', phone: '123123'},
    {name: 'Ilker', phone: '567567'}
]

function App() {
    const [contacts, setContacts] = useState(testData)
    return (
        <div className="App">
            <div className="container">
                <h3>Contacts App</h3>
                <Contact contacts={contacts} setContacts={setContacts}/>
            </div>
        </div>
    );
}

export default App;
