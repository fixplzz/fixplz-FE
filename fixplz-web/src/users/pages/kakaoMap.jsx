import React, { useEffect, useState } from "react";
import "./templatePage";

const { kakao } = window;

const KakaoMap = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const kakaoMap = new kakao.maps.Map(container, options);
    kakaoMap.setDraggable(false); //드래그 막기
    kakaoMap.setZoomable(false); //줌 막기
    setMap(kakaoMap);
  }, []);

  return (
    <div
      id="map"
      style={{
        position: "relative",
        marginLeft: "auto",
        marginRight: "auto",
        width: "80%",
        height: "400px",
        borderRadius: "20px",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    ></div>
  );
};

export default KakaoMap;
