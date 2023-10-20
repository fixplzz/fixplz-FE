import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/error/error-page";
import MainPage from "./pages/main/main-page";

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
