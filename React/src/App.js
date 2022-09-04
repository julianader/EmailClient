import Navbar1 from "./Components/Navbar";
import Top from "./Components/top.js";
import Main from "./Components/Main.js";
import { Container } from "./Components/Layout/Container";

function App() {
    return (
        <Container>
            <Navbar1 text="Email Client"></Navbar1>
            <Top />
            <Main />
        </Container>
    );
}

export default App;
