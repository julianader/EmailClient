import React from 'react'
import Container from "./Components/Layout/Container";
import Main from "./Components/Main.js";
import { Navbar } from "./Components/Layout/Navbar";
import Top from "./Components/Layout/top";
import {CardContainer} from "./Components/Layout/Card"

const App:React.FC=()=>{
    return(
        <Container>
            <Navbar />
            <CardContainer>
            <Top />
            </CardContainer>
            <CardContainer>
            <Main />
            </CardContainer>
        </Container>
    )
}

export default App;
