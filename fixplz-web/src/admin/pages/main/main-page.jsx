import { useState } from "react";
import "../../assets/scss/main-page.scss";
import FacilityMap from "../facility/facility-map";
import { ReactComponent as Maincom } from "../../assets/svg/maincom.svg";
import { ReactComponent as Maining } from "../../assets/svg/maining.svg";
import { ReactComponent as Mainload } from "../../assets/svg/mainload.svg";

const MainPage = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const facilities = {
    "facility-01": [
      { lat: 37.56348347, lng: 127.03635235 },
      { lat: 37.56472672, lng: 127.02862509 },
      { lat: 37.55536606, lng: 127.03444144 },
      { lat: 37.55786085, lng: 127.03390217 },
      { lat: 37.56986546, lng: 127.0377336 },
      { lat: 37.57032053, lng: 127.03753008 },
      { lat: 37.56472672, lng: 127.02862509 },
      { lat: 37.55698724, lng: 127.04316237 },
      { lat: 37.5482538, lng: 127.06413766 },
      { lat: 37.55321411, lng: 127.03335402 },
      // 10
      { lat: 37.55786085, lng: 127.02863913 },
      { lat: 37.54729392, lng: 127.06672822 },
      { lat: 37.54291872, lng: 127.04465356 },
      { lat: 37.5464623, lng: 127.04930936 },
      { lat: 37.5482538, lng: 127.06413766 },
      { lat: 37.55564083, lng: 127.01991573 },
      { lat: 37.56434478, lng: 127.0291739 },
      { lat: 37.56554251, lng: 127.04231273 },
      { lat: 37.56480394, lng: 127.04160489 },
      { lat: 37.5703882, lng: 127.0334777 },
      // 20
    ],

    "_facility-02": [
      { lat: 37.55950928, lng: 127.03665924 },
      { lat: 37.54055231, lng: 127.04794484 },
      { lat: 37.54195786, lng: 127.05412292 },
      { lat: 37.56373687, lng: 127.03638927 },
      { lat: 37.55838111, lng: 127.03414291 },
      { lat: 37.55837668, lng: 127.03389675 },
      { lat: 37.55758706, lng: 127.03017005 },
      { lat: 37.56233887, lng: 127.03369481 },
      { lat: 37.54638867, lng: 127.05770577 },
      { lat: 37.543377, lng: 127.044754 },
      // 10
      { lat: 37.54719948, lng: 127.01262027 },
      { lat: 37.546382, lng: 127.05754168 },
      { lat: 37.54834425, lng: 127.06555793 },
      { lat: 37.56708416, lng: 127.02776857 },
      { lat: 37.54828612, lng: 127.02169609 },
      { lat: 37.54828612, lng: 127.02169609 },
      { lat: 37.56536583, lng: 127.0419278 },
      { lat: 37.543377, lng: 127.044754 },
      { lat: 37.53911952, lng: 127.05365227 },
      { lat: 37.56742025, lng: 127.0256888 },
    ], // 스마트 횡단보도 위치
    get "facility-02"() {
      return this["_facility-02"];
    },
    set "facility-02"(value) {
      this["_facility-02"] = value;
    },

    "facility-03": [
      { lat: 37.54834425, lng: 127.06555793 },
      { lat: 37.56708416, lng: 127.02776857 },
      { lat: 37.54195786, lng: 127.05412292 },
      { lat: 37.56373687, lng: 127.03638927 },
      { lat: 37.55838111, lng: 127.03414291 },
      { lat: 37.54291872, lng: 127.04465356 },
      { lat: 37.5464623, lng: 127.04930936 },
      { lat: 37.5482538, lng: 127.06413766 },
      { lat: 37.55564083, lng: 127.01991573 },
      { lat: 37.56434478, lng: 127.0291739 },
      //10
      { lat: 37.56348347, lng: 127.03635235 },
      { lat: 37.56472672, lng: 127.02862509 },
      { lat: 37.55536606, lng: 127.03444144 },
      { lat: 37.55786085, lng: 127.03390217 },
      { lat: 37.543377, lng: 127.044754 },
      { lat: 37.53911952, lng: 127.05365227 },
      { lat: 37.56742025, lng: 127.0256888 },
    ], // 스마트 빗물받이 위치
  };

  const handleButtonClick = (facility) => {
    setSelectedButton(facility);
  };

  const selectedFacility = facilities[selectedButton];
  const positions = Array.isArray(selectedFacility)
    ? selectedFacility
    : selectedFacility
    ? [selectedFacility]
    : [];

  return (
    <>
      <div className="main-page">
        <h1 className="title">시설물 신고 및 관리 현황</h1>
        <div className="container-row">
          <div className="main-page-container">
            <p className="status">
              <Maining />
              미확인
              <text className="count">5</text>
            </p>
          </div>
          <div className="main-page-container2">
            <p className="status">
              <Mainload />
              처리 중<text className="count">2</text>
            </p>
          </div>
          <div className="main-page-container3">
            <p className="status">
              <Maincom />
              답변 완료
              <text className="count">2</text>
            </p>
          </div>
        </div>
      </div>
      <div className="main-page-container4">
        <div className="map-overlay">
          <div
            className={`facility-01 ${
              selectedButton === "facility-01" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("facility-01")}
          >
            스마트 쉼터
          </div>
          <div
            className={`facility-02 ${
              selectedButton === "facility-02" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("facility-02")}
          >
            스마트 횡단보도
          </div>
          <div
            className={`facility-03 ${
              selectedButton === "facility-03" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("facility-03")}
          >
            스마트 빗물받이
          </div>
        </div>
        <FacilityMap positions={positions} style={{ zIndex: 1 }} />
      </div>
    </>
  );
};

export default MainPage;
