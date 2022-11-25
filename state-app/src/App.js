import './App.css';
import UserWithUseEffect from "./components/UserWithuseEffect";
import React, {useEffect, useState} from "react";

function App() {
    const [isVisible, setIsVisible] = useState(true)

    return (
        <div className="App">
            { isVisible && <UserWithUseEffect/>}
            <button onClick={()=> setIsVisible(!isVisible)}>Timer Destroyer</button>
        </div>
    );
}

export default App;
