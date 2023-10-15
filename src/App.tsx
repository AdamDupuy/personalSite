import React from 'react';
import { Container } from "@mui/material";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";


function App() {
  return (
  <Container
    disableGutters
    sx={{
      backgroundColor: "#F4EEE0",
      minWidth: "100%",
      minHeight: "100vh",
      overflow: "hidden",
    }}
  >

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>

  </Container>  
  );
}

export default App;
