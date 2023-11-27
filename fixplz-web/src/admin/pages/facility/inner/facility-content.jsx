import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useCheckControl from "../../../components/customhooks/use-check-control";
import SearchBox from "../../../components/search/search-box";
import { Table } from "react-bootstrap";
import ModalBtn from "../../../components/modal/modal-btn";
import AdminSearch from "../../../components/search/admin-search";

/* 실질적 렌더링 부분 */
const FacilityContent = () => {
  const { cate } = useParams();
  const [dataList, setDataList] = useState([]);
  const { handleAllCheck, handleSingleCheck, checkedList } = useCheckControl({
    dataList,
  });

  const optionVals = [
    { value: "name", name: "시설물 명" },
    { value: "category", name: "시설물 종류" },
    { value: "dong", name: "행정 동" },
    { value: "address", name: "주소" },
    { value: "date", name: "설치 일자" },
  ];

  const controlOptions = [
    {
      from: "facility",
      cate: "insert",
      name: "등록",
      selected: "시설물 등록",
      list: checkedList,
    },
    {
      from: "facility",
      cate: "update",
      name: "수정",
      selected: "시설물 수정",
      list: checkedList,
    },
    {
      from: "facility",
      cate: "delete",
      name: "삭제",
      selected: "이 시설물을 삭제하시겠습니까?",
      list: checkedList,
    },
  ];

  return (
    <div className="bbs-content">
      <SearchBox {...optionVals} />
      <div className="info">
        <ModalBtn {...controlOptions} />
        <div className="info_con">
          <Table responsive hover>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onChange={(e) => handleAllCheck(e.target.checked)}
                    checked={
                      checkedList.length === dataList.length ? true : false
                    }
                  />
                </th>
                <th>번호</th>
                <th>시설 명</th>
                <th>시설 종류</th>
                <th>행정 동</th>
                <th>주소</th>
                <th>설치일</th>
                <th>운영 상태</th>
              </tr>
            </thead>
            <tbody>
              {dataList.length !== 0 ? (
                dataList.map((item, i) => {
                  return (
                    <tr key={i}>
                      <th>
                        <input
                          type="checkbox"
                          onChange={(e) =>
                            handleSingleCheck(e.target.checked, item.facilityNo)
                          }
                          checked={
                            checkedList.includes(item.facilityNo) ? true : false
                          }
                        />
                      </th>
                      <td>{item.facilityName}</td>
                      <td>{item.category}</td>
                      <td>{item.administrateDong}</td>
                      <td>{item.address}</td>
                      <td>{item.createDate}</td>
                      <td>{item.operation}</td>
                    </tr>
                  );
                })
              ) : (
                <tr style={{ textAlign: "center" }}>
                  <td colSpan="10">데이터가 없습니다.</td>
                </tr>
              )}
            </tbody>
          </Table>
          <AdminSearch setData={setDataList} />
        </div>
      </div>
    </div>
  );
};
export default FacilityContent;
