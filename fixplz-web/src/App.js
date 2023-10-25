import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./admin/pages/error/error-page";
import MainPage from "./admin/pages/main/main-page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
