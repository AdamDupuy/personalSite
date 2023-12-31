import React from "react";
import { Container } from "@mui/material";
import { Route, Routes, BrowserRouter, HashRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import InfoPage from "./Pages/InfoPage";

function App() {
  return (
    <Container
      disableGutters
      sx={{
        backgroundColor: "#1D242B",
        minWidth: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <BrowserRouter basename="personalSite">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/infoPage" element={<InfoPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
