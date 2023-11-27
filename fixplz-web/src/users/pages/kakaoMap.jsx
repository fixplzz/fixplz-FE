import React, { useEffect, useState } from "react";
import "./templatePage";

const { kakao } = window;

const KakaoMap = ({ positions }) => {
  const [map, setMap] = useState(null);
  const [currentPosition, setCurrentPosition] = useState({});

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       // setCurrentPosition({
  //       //   lat: position.coords.latitude,
  //       //   lng: position.coords.longitude,
  //       // });
  //       setCurrentPosition({
  //         lat: positions.lat,
  //         lng: positions.lng,
  //       });
  //     });
  //   } else {
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  // }, []);

  // useEffect(() => {
  //   const container = document.getElementById("map");
  //   const options = {
  //     center: new kakao.maps.LatLng(33.450701, 126.570667),
  //     level: 3,
  //   };

  //   const kakaoMap = new kakao.maps.Map(container, options);
  //   kakaoMap.setDraggable(false); //드래그 막기
  //   kakaoMap.setZoomable(false); //줌 막기
  //   setMap(kakaoMap);
  // }, []);

  // 지도 생성
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(positions.lat, positions.lng),
      level: 3,
    };

    const kakaoMap = new kakao.maps.Map(container, options);
    kakaoMap.setDraggable(false); //드래그 막기
    kakaoMap.setZoomable(false); //줌 막기
    setMap(kakaoMap);
  }, []);

  // positions prop이 변경될 때마다 마커 생성 및 지도 중심 이동
  useEffect(() => {
    if (map) {
      map.setCenter(new kakao.maps.LatLng(positions.lat, positions.lng));

      // 마커를 생성하고 지도에 표시
      const markerPosition = new kakao.maps.LatLng(
        positions.lat,
        positions.lng
      );
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    }
  }, [map, positions]);

  // useEffect(() => {
  //   if (map && currentPosition.lat && currentPosition.lng) {
  //     map.setCenter(
  //       new kakao.maps.LatLng(currentPosition.lat, currentPosition.lng)
  //     ); // 현재 위치로 지도 중심 이동

  //     // 마커를 생성하고 지도에 표시
  //     const markerPosition = new kakao.maps.LatLng(
  //       currentPosition.lat,
  //       currentPosition.lng
  //     );
  //     const marker = new kakao.maps.Marker({
  //       position: markerPosition,
  //     });
  //     marker.setMap(map);
  //   }
  // }, [map, currentPosition]);

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
