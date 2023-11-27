import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import KakaoMap from "../../../users/pages/kakaoMap";
import FacilityMap from "../../pages/facility/facility-map";
import DaumPost from "../post/daum-post";

const FacilityRegist = ({ onHide }) => {
  const [searchParam, setSearchParam] = useSearchParams();

  const [title, setTitle] = useState();
  const [category, setCategory] = useState("스마트 쉼터");
  const [administrateDong, setAdministrateDong] = useState();
  const [addressObj, setAddressObj] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const departmentName = "스마트 도시과";
  const departmentNumber = "02-2286-6648";

  const requestUrl = process.env.REACT_APP_API_URL + "/api/v1/facility";
  console.log(category);
  const onSubmit = (e) => {
    e.preventDefault();

    let requestBody = {};
    requestBody.facilityName = title;
    requestBody.facilityCategory = category;
    requestBody.administrativeDong = administrateDong;
    requestBody.facilityAddress = addressObj;
    requestBody.departmentName = departmentName;
    requestBody.departmentNumber = departmentNumber;
    requestBody.latitude = latitude;
    requestBody.longitude = longitude;
    console.log(requestBody);
    axios
      .post(requestUrl, requestBody)
      .then((resp) => {
        if (resp.data) {
          alert("시설물 등록 성공");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="admin_update_container">
      <div className="admin_update">
        <form name="frm" onSubmit={onSubmit} encType="json">
          <fieldset>
            <div>
              <label htmlFor="title">시설 명</label>
              <input
                type="text"
                id="title"
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
                <option value="스마트 쉼터">스마트 쉼터</option>
                <option value="스마트 횡단보도">스마트 횡단보도</option>
              </select>
            </div>
            <div>
              <label htmlFor="administrateDong">주소</label>
              <input
                type="text"
                value={administrateDong || ""}
                placeholder="행정 동"
                onChange={(e) => setAdministrateDong(e.target.value)}
                required
                style={{ width: "30%", marginRight: "30px" }}
              />
              <DaumPost
                setAdministrateDong={setAdministrateDong}
                setAddressObj={setAddressObj}
                setLatitude={setLatitude}
                setLongitude={setLongitude}
              />
            </div>
            <div>
              <input
                type="text"
                style={{ marginTop: "10px" }}
                value={addressObj || ""}
                placeholder="상세 주소"
                onChange={(e) => setAddressObj(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="location">좌표</label>
              <div className="date_flex">
                <input
                  type="number"
                  value={latitude || ""}
                  placeholder="위도"
                  onChange={(e) => setLatitude(e.target.value)}
                />
                <input
                  type="number"
                  value={longitude || ""}
                  placeholder="경도"
                  onChange={(e) => setLongitude(e.target.value)}
                />
              </div>
              <div style={{ width: "100%" }}>
                <FacilityMap positions={[{ lat: latitude, lng: longitude }]} />
              </div>
              <div>
                <label htmlFor="department">담당 부서</label>
                <div className="date_flex">
                  <input
                    type="text"
                    value={departmentName}
                    placeholder="부서 명"
                    readOnly
                  />
                  <input
                    type="text"
                    value={departmentNumber}
                    placeholder="부서 번호"
                    readOnly
                  />
                </div>
              </div>
            </div>
            <input type="submit" value="등록" />
          </fieldset>
        </form>
      </div>
    </div>
  );
};
export default FacilityRegist;
