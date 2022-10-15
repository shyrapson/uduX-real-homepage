import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import styled from "styled-components";
import SideNav from "./components/sidebar/SideNav";
import SidebarSongs from "./components/sidebar/SidebarSongs";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
  box-sizing: border-box;
  background: #000000;
`;

const GridBox = styled.div`
  width: 100%;
  height: 100%;
    display: grid;
   grid-template-columns: 292px 1fr;
  `;


function App() {
  return (
    <AppContainer>
      <GridBox>
        <SidebarSongs/>
        <SideNav/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </GridBox>
    </AppContainer>
  );
}

export default App;
