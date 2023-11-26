import React, { useEffect, useState } from "react";
import "../main/main-page";

const { kakao } = window;

const FacilityMap = ({ positions }) => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.56061111, 127.039),
      level: 6,
    };

    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
  }, []);

  useEffect(() => {
    if (map && positions && positions.length > 0) {
      markers.forEach((marker) => marker.setMap(null));

      const newMarkers = positions.map((position) => {
        const markerPosition = new kakao.maps.LatLng(
          position.lat,
          position.lng
        );
        const newMarker = new kakao.maps.Marker({
          position: markerPosition,
          map: map,
          title: position.name,
        });
        return newMarker;
      });

      const firstPosition = positions[0];
      const center = new kakao.maps.LatLng(
        firstPosition.lat,
        firstPosition.lng
      );
      map.setCenter(center);

      setMarkers(newMarkers);
    }
  }, [map, positions]);

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

export default FacilityMap;
