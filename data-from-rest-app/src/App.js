import './App.css';
import Users from "./components/Users";
import UsersAxios from "./components/UsersAxios";

function App() {
    return (
        <div className="App">
            <h1>Fetch Sample - Users</h1>
            <Users/>
            <h1>Axios Sample - Users</h1>
            <UsersAxios/>
        </div>
    );
}

export default App;
