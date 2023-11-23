import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Admin ----------------------------------------------------------------------
import MainPage from "./admin/pages/main/main-page";
import LoginPage from "./admin/pages/main/login-page";
import NotFound from "./admin/pages/error/error-page";

// Users ----------------------------------------------------------------------
import TemplatePage from "./users/pages/template-page/template-page";
import KakaoMap from "./users/pages/template-page/kakao-map";
import ReportComplete from "./users/pages/template-page/reportComplete";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/" element={<TemplatePage />} />
          <Route path="/admin" element={<MainPage />} />
          <Route path="/kakaomap" element={<KakaoMap />} />
          <Route path="/reportComplete" element={<ReportComplete />} />
          <Route path="/admin/login" element={<LoginPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
