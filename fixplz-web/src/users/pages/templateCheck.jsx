import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../asset/styles/templateCheck.scss";
import ReportContext from "../reportContext";

function TemplateCheck() {
  const { report } = useContext(ReportContext);
  // const navigate = useNavigate(); // useNavigate 훅 사용

  // const handleSubmission = async () => {
  //   try {
  //     // 서버에 민원 정보를 전송!
  //     const response = await axios.post("A P I 호 출 !", report);

  //     if (response.status === 200) {
  //       console.log("민원 제출 성공");
  //       navigate("/reportComplete");
  //     } else {
  //       console.log("민원 제출 실패");
  //     }
  //   } catch (error) {
  //     console.error("민원 제출 중 에러 발생:", error);
  //   }
  // };

  return (
    <>
      <div className="templatecheck">
        <div className="mainlogo">
          <img src="/assets/imgs/mainlogo.png" alt="메인로고" width="100px" />
          <div class="box">
            <p className="header">내가 작성한 민원</p>
          </div>
          <div className="report-container">
            <div className="report-loc">
              위치
              <br /> -
            </div>
            <div className="report-loc-data">
              서울특별시 성동구 고산자로 280{report.location}
            </div>

            <div className="facility-type">
              시설물 종류 <br /> -
            </div>
            <div className="facility-type-data">
              스마트 쉼터{report.facilityInfo}
            </div>

            <div className="report-keyword">
              민원 키워드 <br /> -
            </div>
            <div className="report-keyword-data">{report.reportCategory}</div>

            <div className="report-detail">
              민원 상세 작성 <br /> -
            </div>
            <div class="report-box">
              <div className="report-detail-data">{report.reportDetail}</div>
              <div className="report-photo">
                {report.reportImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`reportImage-${index}`}
                    className="report-image"
                  />
                ))}
              </div>
            </div>
            {/* <hr /> */}
          </div>
          <div className="report-info">민원을 접수하시겠습니까?</div>
          <Link to="/reportComplete">
            <button className="report-submit">접수하기</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default TemplateCheck;
