import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Admin ----------------------------------------------------------------------
import MainPage from "./admin/pages/main/main-page";
import LoginPage from "./admin/pages/main/login-page";
// import NotFound from "./admin/pages/error/error-page";

// Users ----------------------------------------------------------------------
import KakaoMap from "./users/pages/kakaoMap";
import TemplatePage from "./users/pages/templatePage";
import TemplateCheck from "./users/pages/templateCheck";
import ReportComplete from "./users/pages/reportComplete";
import ReportContext from "./users/reportContext";

function App() {
  const [report, setReport] = React.useState({
    location: null,
    facilityInfo: null,
    reportCategory: null,
    reportImages: [],
    reportDetail: null,
  });

  return (
    <>
      <ReportContext.Provider value={{ report, setReport }}>
        <BrowserRouter>
          <Routes>
            {/* Admin */}
            <Route path="/admin" element={<MainPage />} />
            {/* <Route path="*" element={<NotFound />} /> */}
            <Route path="/admin/login" element={<LoginPage />} />

            {/* Report */}
            <Route path="/kakaomap" element={<KakaoMap />} />
            <Route path="/" element={<TemplatePage />} />
            <Route path="/templateCheck" element={<TemplateCheck />} />
            <Route path="/reportComplete" element={<ReportComplete />} />
          </Routes>
        </BrowserRouter>
      </ReportContext.Provider>
    </>
  );
}

export default App;
