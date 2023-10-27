import { useState, useRef } from "react";
import "../../assets/scss/main-page.scss";
import { StatPage } from "../stat/stat-page";

const MainPage = () => {
  const [menuState, setMenuState] = useState("visitor");
  const visitorRef = useRef(null);
  const reportRef = useRef(null);
  const proposalRef = useRef(null);
  const memberRef = useRef(null);

  const visitorMenu = () => {
    setMenuState("visitor");
    visitorRef.current.style.setProperty("background-color", "lightgray");
    reportRef.current.style.setProperty("background-color", "white");
    proposalRef.current.style.setProperty("background-color", "white");
    memberRef.current.style.setProperty("background-color", "white");
  };
  const reportMenu = () => {
    setMenuState("report");
    visitorRef.current.style.setProperty("background-color", "white");
    reportRef.current.style.setProperty("background-color", "lightgray");
    proposalRef.current.style.setProperty("background-color", "white");
    memberRef.current.style.setProperty("background-color", "white");
  };
  const proposalMenu = () => {
    setMenuState("proposal");
    visitorRef.current.style.setProperty("background-color", "white");
    reportRef.current.style.setProperty("background-color", "white");
    proposalRef.current.style.setProperty("background-color", "lightgray");
    memberRef.current.style.setProperty("background-color", "white");
  };
  const memberMenu = () => {
    setMenuState("member");
    visitorRef.current.style.setProperty("background-color", "white");
    reportRef.current.style.setProperty("background-color", "white");
    proposalRef.current.style.setProperty("background-color", "white");
    memberRef.current.style.setProperty("background-color", "lightgray");
  };
  return (
    <>
      <div className="main-page">
        <div className="menubar">
          <div className="logo-icon">
            <img src="/assets/imgs/mainlogo.png" alt="로고" width="150px" />
          </div>
          <div className="menubar-btn-wrapper">
            <div
              className="menubar-btn1"
              ref={visitorRef}
              onClick={() => visitorMenu()}
            >
              <span className="subtitle">방문자 현황</span>
            </div>
            <div
              className="menubar-btn2"
              ref={reportRef}
              onClick={() => reportMenu()}
            >
              <span className="subtitle">신고 현황</span>
            </div>
            <div
              className="menubar-btn3"
              ref={proposalRef}
              onClick={() => proposalMenu()}
            >
              <span className="subtitle">제안 현황</span>
            </div>
            <div
              className="menubar-btn4"
              ref={memberRef}
              onClick={() => memberMenu()}
            >
              <span className="subtitle">회원 관리</span>
            </div>
          </div>
        </div>

        <div>
          {
            {
              visitor: <StatPage />,
              report: <p>qwe</p>,
              proposal: <p>asd</p>,
              member: <p>zxc</p>,
            }[menuState]
          }
        </div>
      </div>
    </>
  );
};

export default MainPage;
