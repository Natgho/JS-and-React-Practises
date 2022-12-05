import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Clients from "./components/Clients";
import User from "./components/User";
import Error404 from "./components/Error404";

function App() {
    return (
        <div className="App">
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/clients">Clients</Link></li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/users/" element={<Users/>}>
                    <Route path=":userid" element={<User/>}/>
                </Route>
                <Route path="/user/:userid" element={<User/>}/>
                <Route path="/clients" element={<Clients/>}/>
                <Route path='*' element={<Error404/>}/>
            </Routes>
        </div>
    );
}

export default App;
