import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const FacilityRegist = ({ onHide }) => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [title, setTitle] = useState();

  return (
    <div className="admin_update_container">
      <div className="admin_update">
        <form name="frm" onSubmit={onSubmit} encType="multipart/form-data">
          <fieldset>
            <div>
              <label htmlFor="title">시설 명</label>
              <input
                type="text"
                value={title || ""}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="category">카테고리</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="smartShelter">스마트 쉼터</option>
                <option value="smartSmokeBooth">스마트 흡연부스</option>
              </select>
            </div>
            <div>
              <label htmlFor="location">상세 주소</label>
              <input
                type="text"
                value={location || ""}
                placeholder="도로명주소"
                onChange={(e) => setLocation(e.target.value)}
                required
              />
              <input
                type="text"
                style={{ marginTop: "10px" }}
                value={locationdetail || ""}
                placeholder="장소"
                onChange={(e) => setLocationdetail(e.target.value)}
                required
              />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
