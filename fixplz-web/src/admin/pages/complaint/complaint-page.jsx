import React from "react";
import "../../assets/scss/complaint-page.scss";

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

        <table>
          <thead>
            <tr>
              <th></th>
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
            <td>2</td>
            <td>스마트 쉼터</td>
            <td>설치를 건의해요</td>
            <td>의자가 조금 더 있었으면 좋겠어요</td>
            <td>2023.10.31</td>
            <td>답변중</td>
          </tbody>
          <tbody>
            <td>
              <input type="checkbox" />
            </td>
            <td>1</td>
            <td>스마트 횡단보도</td>
            <td>수리가 필요해요</td>
            <td>횡단보도 아래 전등이 안 들어와서 위험한 것 같아요.</td>
            <td>2023.11.25</td>
            <td>미확인</td>
          </tbody>
          <tbody>
            <td>
              <input type="checkbox" />
            </td>
            <td>4</td>
            <td>스마트 흡연부스</td>
            <td>청소가 필요해요</td>
            <td>
              담배꽁초가 너무 빠르게 차서, 쉽게 지저분해집니다. <br /> 이 부분에
              대해 조치 좀 취해주세요{" "}
            </td>
            <td>2023.10.12</td>
            <td>답변완료</td>
          </tbody>
          <tbody>
            <td>
              <input type="checkbox" />
            </td>
            <td>4</td>
            <td>스마트 흡연부스</td>
            <td>청소가 필요해요</td>
            <td>
              담배꽁초가 너무 빠르게 차서, 쉽게 지저분해집니다. <br /> 이 부분에
              대해 조치 좀 취해주세요{" "}
            </td>
            <td>2023.10.12</td>
            <td>답변완료</td>
          </tbody>
          <tbody>
            <td>
              <input type="checkbox" />
            </td>
            <td>4</td>
            <td>스마트 흡연부스</td>
            <td>청소가 필요해요</td>
            <td>
              담배꽁초가 너무 빠르게 차서, 쉽게 지저분해집니다. <br /> 이 부분에
              대해 조치 좀 취해주세요{" "}
            </td>
            <td>2023.10.12</td>
            <td>답변완료</td>
          </tbody>
          <tbody>
            <td>
              <input type="checkbox" />
            </td>
            <td>4</td>
            <td>스마트 흡연부스</td>
            <td>청소가 필요해요</td>
            <td>
              담배꽁초가 너무 빠르게 차서, 쉽게 지저분해집니다. <br /> 이 부분에
              대해 조치 좀 취해주세요{" "}
            </td>
            <td>2023.10.12</td>
            <td>답변완료</td>
          </tbody>
          <tbody>
            <td>
              <input type="checkbox" />
            </td>
            <td>4</td>
            <td>스마트 흡연부스</td>
            <td>청소가 필요해요</td>
            <td>
              담배꽁초가 너무 빠르게 차서, 쉽게 지저분해집니다. <br /> 이 부분에
              대해 조치 좀 취해주세요{" "}
            </td>
            <td>2023.10.12</td>
            <td>답변완료</td>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ComplaintPage;
