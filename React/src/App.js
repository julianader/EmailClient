import { Container } from "./Components/Layout/Container";
import Main from "./Components/Main.js";
import { Navbar } from "./Components/Layout/Navbar";
import Top from "./Components/Layout/top.js";
import {CardContainer} from "./Components/Layout/Card"
function App() {
    return (
        <Container>
            <Navbar text="Email Client"></Navbar>
            <CardContainer>
            <Top />
            </CardContainer>
            <CardContainer>
            <Main />
            </CardContainer>
        </Container>
    );
    
}

export default App;
