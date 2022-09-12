import { Container } from "./Components/Layout/Container";
import Main from "./Components/Main.js";
import { Navbar } from "./Components/Layout/Navbar";
import Top from "./Components/Layout/top.js";

function App() {
    return (
        <Container>
            <Navbar text="Email Client"></Navbar>
            <Top />
            <Main />
        </Container>
    );
    
}

export default App;
