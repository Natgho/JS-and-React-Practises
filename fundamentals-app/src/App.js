import UserwithProps from "./components/UserwithProps";
import UserWithParameterizedProps from "./components/UserWithParameterizedProps";
import UserWithPropTypes from "./components/PropTypesPractises";

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
            <UserWithPropTypes name={"sezer"}
                               surname={"Bozkir"}
                               age={20}
                               address={
                                   {
                                       title: "istanbul",
                                       zipcode: 34000
                                   }
                               }
                               isLoggedIn={true}
                               friends={friends}/>
        </div>
    )
}

export default App;