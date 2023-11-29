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
                <>
                  {/* <tr style={{ textAlign: "center" }}>
                    <td colSpan="10">데이터가 없습니다.</td>
                  </tr> */}
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>10</td>
                    <td>성수동이마트</td>
                    <td>스마트 쉼터</td>
                    <td>성수동제2가</td>
                    <td>서울특별시 성동구 뚝섬로 377</td>
                    <td>정상 운영</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>9</td>
                    <td>응봉동주민센터</td>
                    <td>스마트 쉼터</td>
                    <td>응봉동</td>
                    <td>서울특별시 성동구 독서당로 424</td>
                    <td>정상 운영</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>8</td>
                    <td>신금호역</td>
                    <td>스마트 쉼터</td>
                    <td>금호2-3가동</td>
                    <td>서울특별시 성동구 금호로 173</td>
                    <td>정상 운영</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>7</td>
                    <td>옥수파출소 앞</td>
                    <td>스마트 쉼터</td>
                    <td>옥수동</td>
                    <td>서울특별시 성동구 독서당로 211</td>
                    <td>정상 운영</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>6</td>
                    <td>금호역</td>
                    <td>스마트 쉼터</td>
                    <td>금호2-3가동</td>
                    <td>서울특별시 성동구 매봉길 50</td>
                    <td>정상 운영</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>5</td>
                    <td>한양대정문 앞</td>
                    <td>스마트 쉼터</td>
                    <td>사근동</td>
                    <td>서울특별시 성동구 왕십리로 222</td>
                    <td>정상 운영</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>4</td>
                    <td>성동세무서</td>
                    <td>스마트 쉼터</td>
                    <td>송정동</td>
                    <td>서울특별시 성동구 광나루로 311</td>
                    <td>정상 운영</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>3</td>
                    <td>상왕십리역</td>
                    <td>스마트 쉼터</td>
                    <td>행당제1동</td>
                    <td>서울특별시 성동구 고산자로 164</td>
                    <td>정상 운영</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>2</td>
                    <td>센트라스, 성동고방면</td>
                    <td>스마트 쉼터</td>
                    <td>왕십리도선동</td>
                    <td>서울특별시 성동구 왕십리로 410</td>
                    <td>정상 운영</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>1</td>
                    <td>성동구청</td>
                    <td>스마트 쉼터</td>
                    <td>행당제1동</td>
                    <td>서울특별시 성동구 고산자로 280</td>
                    <td>정상 운영</td>
                  </tr>
                </>
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
