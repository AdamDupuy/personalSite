import React from "react";
import { Container } from "@mui/material";
import { Route, Routes, BrowserRouter, HashRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

function App() {
  return (
    <Container
      disableGutters
      sx={{
        backgroundColor: "#001524",
        minWidth: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="personalSite/" element={<Home />} />
          <Route path="personalSite/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
