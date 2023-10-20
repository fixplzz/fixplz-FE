import { useState, useRef } from "react";
import "../../assets/scss/stat-page.scss";
import { VisitChart } from "../../components/chart/visit-chart";

export const StatPage = () => {
  const [buttonState, setButtonState] = useState("daily");
  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  const dailyVisitor = () => {
    setButtonState("daily");
    dayRef.current.style.setProperty("background-color", "lightblue");
    monthRef.current.style.setProperty("background-color", "white");
    yearRef.current.style.setProperty("background-color", "white");
  };
  const monthlyVisitor = () => {
    setButtonState("monthly");
    dayRef.current.style.setProperty("background-color", "white");
    monthRef.current.style.setProperty("background-color", "lightblue");
    yearRef.current.style.setProperty("background-color", "white");
  };
  const yearlyVisitor = () => {
    setButtonState("yearly");
    dayRef.current.style.setProperty("background-color", "white");
    monthRef.current.style.setProperty("background-color", "white");
    yearRef.current.style.setProperty("background-color", "lightblue");
  };

  return (
    <>
      <div className="stat">
        <div className="visitor-wrapper">
          <div
            className="visitor-day"
            ref={dayRef}
            onClick={() => dailyVisitor()}
          >
            <span className="subtitle">일일 방문자 수</span>
          </div>
          <div
            className="visitor-month"
            ref={monthRef}
            onClick={() => monthlyVisitor()}
          >
            <span className="subtitle">월별 방문자 수</span>
          </div>
          <div
            className="visitor-year"
            ref={yearRef}
            onClick={() => yearlyVisitor()}
          >
            <span className="subtitle">연도별 방문자 수</span>
          </div>
        </div>

        <div className="visitor-graph">
          <span className="subtitle">방문자 현황</span>
          {
            {
              daily: <VisitChart />,
              monthly: <p>dsa</p>,
              yearly: <p>dsdsadasa</p>,
            }[buttonState]
          }
        </div>
      </div>
    </>
  );
};
