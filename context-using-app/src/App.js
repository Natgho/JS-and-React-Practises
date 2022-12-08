import './App.css';
import {ThemeProvider} from "./context/ThemeContext";
import Button from "./components/Button";
import Container from "./components/Container/Container";
import {UserProvider} from "./context/UserContext";

function App() {
    return (
        <div className="App">
            <ThemeProvider>
                <UserProvider>
                    <Container>
                        <Button/>
                    </Container>
                </UserProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
