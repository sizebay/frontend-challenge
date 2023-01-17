import React from "react";
import styled from "styled-components";

import DateHeader from "./components/DateHeader";
import ProgressBar from "./components/ProgressBar";
import Search from "./components/Search";
import AddTask from "./components/AddTask";

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

const Head = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
`;

function App() {
    return (
        <Background>
            <Container>
                <Head>
                    <DateHeader />
                    <ProgressBar progress={30} />
                    <Search />
                    <AddTask />
                </Head>
            </Container>
        </Background>
    );
}

export default App;
