import React from "react";
import ReactDOM from "react-dom/client"; // react v18 버전부터 새로 생긴 모듈이라 이 모듈로 DOM 렌더링!
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);
