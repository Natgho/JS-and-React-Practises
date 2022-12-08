import './App.css';
import {ThemeProvider} from "./context/ThemeContext";
import Button from "./components/Button";
import Container from "./components/Container/Container";

function App() {
    return (
        <div className="App">
            <ThemeProvider>
                <Container>
                    <Button/>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default App;
