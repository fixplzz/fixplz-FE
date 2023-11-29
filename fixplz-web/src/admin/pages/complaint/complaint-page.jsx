import React from "react";
import "../../assets/scss/complaint-page.scss";
import CustomPagination from "../../components/pagination/custom-pagination";
import { Table } from "react-bootstrap";

const ComplaintPage = () => {
  return (
    <>
      <div className="complaint-page">
        <h1 className="title">민원 관리</h1>
        <div className="container-row">
          <div
            className="complaint-page-container"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              className="complaint-page-container1"
              style={{ display: "flex", alignItems: "center" }}
            >
              <h5 className="report-keyword">민원 키워드</h5>
              <div className="keyword-list">청소가 필요해요</div>
              <div className="keyword-list">수리가 필요해요</div>
              <div className="keyword-list">설치를 건의해요</div>
              <div className="keyword-list">이용이 불편해요</div>
              <div className="keyword-list">기타사항</div>
            </div>
            <div
              className="complaint-page-container2"
              style={{ display: "flex", alignItems: "center" }}
            >
              <h5 className="report-status">답변 상태</h5>
              <div className="status-list-yet">미확인</div>
              <div className="status-list-load">처리 중</div>
              <div className="status-list-com">답변 완료</div>
            </div>
          </div>
        </div>

        <Table responsive hover>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>시설물 번호</th>
              <th>시설물 종류</th>
              <th>민원 키워드</th>
              <th>민원 내용</th>
              <th>민원 일자</th>
              <th>답변상태</th>
            </tr>
          </thead>
          <tbody>
            <td>
              <input type="checkbox" />
            </td>
            <td>6</td>
            <td>스마트 흡연부스</td>
            <td>청소가 필요해요</td>
            <td>
              담배꽁초가 너무 빠르게 차서, 쉽게 지저분해집니다. <br /> 이 부분에
              대해 조치 좀 취해주세요{" "}
            </td>
            <td>2023.09.25</td>
            <td>답변중</td>
          </tbody>
          <tbody>
            <td>
              <input type="checkbox" />
            </td>
            <td>5</td>
            <td>스마트 횡단보도</td>
            <td>수리가 필요해요</td>
            <td>횡단보도 아래 전등이 안 들어와서 위험한 것 같아요.</td>
            <td>2023.09.30</td>
            <td>답변완료</td>
          </tbody>
          <tbody>
            <td>
              <input type="checkbox" />
            </td>
            <td>4</td>
            <td>스마트 쉼터</td>
            <td>설치를 건의해요</td>
            <td>버스 정류장 근처에 스마트 쉼터 설치를 건의합니다.</td>
            <td>2023.10.10</td>
            <td>미확인</td>
          </tbody>
          <tbody>
            <td>
              <input type="checkbox" />
            </td>
            <td>3</td>
            <td>스마트 쉼터</td>
            <td>설치를 건의해요</td>
            <td>
              주변에 휴식을 취할 곳이 없어요. 스마트 쉼터 설치를 건의합니다.
            </td>
            <td>2023.10.12</td>
            <td>미확인</td>
          </tbody>
          <tbody>
            <td>
              <input type="checkbox" />
            </td>
            <td>2</td>
            <td>스마트 횡단보도</td>
            <td>수리가 필요해요</td>
            <td>
              횡단보도 신호등이 제대로 작동하지 않아 위험해요. <br /> 이 부분에
              대해 조치 좀 취해주세요{" "}
            </td>
            <td>2023.11.01</td>
            <td>답변중</td>
          </tbody>
          <tbody>
            <td>
              <input type="checkbox" />
            </td>
            <td>1</td>
            <td>스마트 흡연부스</td>
            <td>청소가 필요해요</td>
            <td>
              담배꽁초가 너무 빠르게 차서, 쉽게 지저분해집니다. <br /> 이 부분에
              대해 조치 좀 취해주세요{" "}
            </td>
            <td>2023.11.03</td>
            <td>답변완료</td>
          </tbody>
        </Table>
        <div style={{ marginTop: "30px" }}>
          <div class="pagination">
            <a href="#">&laquo;</a>
            <a className="active" href="#">
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">&raquo;</a>
          </div>
          {/* <CustomPagination /> */}
        </div>
      </div>
    </>
  );
};
export default ComplaintPage;
