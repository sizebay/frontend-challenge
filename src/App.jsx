import React from "react";
import styled from "styled-components";

import DateHeader from "./components/DateHeader";
import ProgressBar from "./components/ProgressBar";
import SearchBar from "./components/SearchBar";

const Background = styled.main`
    background-color: #555555;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Container = styled.section`
    background-color: #ffffff;
    width: 800px;
    height: 650px;
    border-radius: 4px;

    padding: 60px;
`;

function App() {
    return (
        <Background>
            <Container>
                <DateHeader />
                <ProgressBar progress={30} />
                <SearchBar />
            </Container>
        </Background>
    );
}

export default App;
