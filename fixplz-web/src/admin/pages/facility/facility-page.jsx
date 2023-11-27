import { Routes, Route } from "react-router-dom";
import SelectCategory from "../../components/category/select-category";
import FacilityContent from "./inner/facility-content";

const FacilityPage = () => {
  const category = [
    { cate: "all", name: "전체" },
    { cate: "smartShelter", name: "스마트 쉼터" },
    { cate: "smartCrosswalk", name: "스마트 횡단보도" },
    { cate: "smartRainGutter", name: "스마트 빗물받이" },
  ];

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
