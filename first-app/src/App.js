import UserwithProps from "./components/UserwithProps";
import UserWithParameterizedProps from "./components/UserWithParameterizedProps";

const friends = [
    {
        id: 1,
        name: "Ilker"
    },
    {
        id: 2,
        name: "Samet"
    }
]

function App() {
    return (
        <div>
            <UserwithProps name={"Sezer"} surname={"Bozkir"} isLoggedIn={true}/>
            <UserwithProps name={"Sezer"} surname={"Bozkir"} isLoggedIn={false}/>
            <UserWithParameterizedProps name={"Sezer"} surname={"Bozkir"} isLoggedIn={true} friends={friends}/>
            <UserWithParameterizedProps name={"Sezer"} surname={"Bozkir"} isLoggedIn={false} friends={friends}/>
        </div>
    )
}

export default App;