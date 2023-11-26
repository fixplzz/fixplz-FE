import { useEffect } from "react";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SelectCategory from "../../components/category/select-category";
import FacilityContent from "./inner/facility-content";

const FacilityPage = () => {
  // const history = useNavigate();
  const category = [
    { cate: "all", name: "전체" },
    { cate: "smartShelter", name: "스마트 쉼터" },
    { cate: "smartSmokeBooth", name: "스마트 흡연부스" },
  ];

  // useEffect(() => {
  //   history("facility/all");
  // }, []);

  return (
    <div className="bbs admin-container">
      <h1 className="title">시설물 관리</h1>
      <div style={{ float: "left" }}>
        <SelectCategory {...category} />
      </div>
      <Routes>
        <Route path=":cate/*" element={<FacilityContent />} />
      </Routes>
    </div>
  );
};
export default FacilityPage;
