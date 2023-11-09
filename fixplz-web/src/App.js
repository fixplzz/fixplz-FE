import React from "react";
// import styled from "styled-components";
import GlobalStyle from "./assets/styles/global-styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Admin ----------------------------------------------------------------------
import MainPage from "./admin/pages/main/main-page";
import LoginPage from "./admin/pages/main/login-page";
import NotFound from "./admin/pages/error/error-page";

// Users ----------------------------------------------------------------------
import TemplatePage from "./users/pages/template-page/template-page";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<TemplatePage />} />
          <Route path="/admin" element={<MainPage />} />
          <Route path="/admin/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
