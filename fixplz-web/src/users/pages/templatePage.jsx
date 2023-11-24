import "./kakaoMap";
import axios from "axios";
import KakaoMap from "./kakaoMap";
import "../asset/styles/templatePage.scss";
import ReportContext from "../reportContext";
import { useNavigate } from "react-router-dom";
import ReportCategory from "../components/report-category";
import React, { useState, useContext, useEffect } from "react";
import { ReactComponent as Plusimage } from "../asset/image/plusimage.svg";

function TextBox({ text, style }) {
  return <div style={style}>{text}</div>;
}

const TemplatePage = () => {
  const [authCode, setAuthCode] = useState("");
  const [image1, setImage1] = React.useState(null);
  const [image2, setImage2] = React.useState(null);
  const [phoneNo, setPhoneNo] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const { report, setReport, keywords } = useContext(ReportContext);

  const navigate = useNavigate();

  useEffect(() => {
    // 민원 상세 내용이 비어있지 않고, 키워드가 선택되었으며, 휴대전화 인증이 완료되었다면!
    if (
      report.reportDetail !== "" &&
      keywords &&
      keywords.length > 0 &&
      !isVerified
    ) {
      setIsSubmitDisabled(false); // 제출 버튼 활성화
    } else {
      setIsSubmitDisabled(true); // 아니라면 비활성화
    }
  }, [report.reportDetail, keywords, isVerified]); // 상태가 변경될 때마다 체크

  // =====================================================================================
  // 민원 상세 작성에 이미지 첨부 기능 구현
  const onImageChange = (event, setImage, imageIndex) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        setReport((prevReport) => {
          const newReportImages = [...prevReport.reportImages];
          newReportImages[imageIndex] = e.target.result;
          return {
            ...prevReport,
            reportImages: newReportImages,
          };
        });
      };
      reader.readAsDataURL(event.target.files[0]); // 이미지 선택 시, 데이터 URL 형태로 읽음
    }
  };

  // 상세 내용 작성 시, setReport를 통해 report 상태에 업데이트
  const handleReportDetailChange = (event) => {
    setReport({
      ...report,
      reportDetail: event.target.value,
    });
  };

  // ===============================================================================================================
  // 전화번호 입력 핸들러!
  // 사용자가 입력한 인증 코드를 phoneNumber라는 상태 변수에 저장하는 역할-
  const handleInputChange = (e) => {
    setPhoneNo(e.target.value);
  };

  // 사용자가 전송한 전화번호 전송 + 인증번호 요청
  const requestAuthNumber = async () => {
    console.log("phoneNo:", phoneNo);
    try {
      const response = await axios.post(
        "http://192.168.0.18:8080/api/v1/complaint/sms/send",
        {
          phoneNo: phoneNo,
        }
      );
      if (response.status === 200) {
        console.log("인증번호 요청 성공");
      }
    } catch (error) {
      console.error("인증번호 요청 실패", error.response.data);
    }
  };

  // 인증 코드 입력 핸들러!
  // 사용자가 입력한 인증 코드를 authcode라는 상태 변수에 저장하는 역할-
  const handleAuthCodeChange = (e) => {
    setAuthCode(e.target.value);
  };

  // 인증 코드 확인 함수!
  const verifyAuthNumber = async () => {
    try {
      const response = await axios.post(
        "http://192.168.0.18:8080/api/v1/complaint/sms/validate",
        {
          phoneNo: phoneNo,
          inputAuthCode: authCode,
        }
      );
      // console.log("Response data:", response.data);

      if (response.status === 200) {
        console.log("인증번호 확인 성공");
        setIsVerified(true);
      }
    } catch (error) {
      console.error("인증번호 요청 실패", error.response.data);
    }
  };

  // ====================================================================================================
  // 민원 제출 함수
  const handleSubmit = () => {
    if (!isVerified) {
      alert("휴대전화 인증이 필요합니다.");
      return;
    } else {
      navigate("/templateCheck");
    }
  };

  // ====================================================================================================

  return (
    <div className="template-page">
      <div className="mainlogo">
        <img src="/assets/imgs/mainlogo.png" alt="메인로고" width="100px" />
        <div className="callinfo-box">
          <TextBox
            text="☎️ 스마트도시과 | 02-2286-6331"
            style={{ fontWeight: 900 }}
          />
        </div>
        <div className="locinfo-box">
          <TextBox text={`현 위치`} style={{ fontWeight: 900 }} />
        </div>
        <div className="map">
          <KakaoMap />
          <div className="category">
            신고 카테고리 <text className="necessary">* 필수</text>
          </div>
          <ReportCategory />
          <div className="inputphoto">
            <div style={{ fontWeight: "bold" }}>
              민원 사진 첨부 <text className="optional">( 선택 )</text>
            </div>

            <div className="input-wrapper">
              <div className="image-input">
                <input
                  type="file"
                  onChange={(e) => onImageChange(e, setImage1, 0)}
                  style={{ display: "none" }}
                  id="file1"
                />
                {image1 ? (
                  <img src={image1} alt="preview" className="image-preview" />
                ) : (
                  <label htmlFor="file1" className="label-container">
                    <Plusimage className="plusimage" />
                    <span>이미지를 업로드하세요</span>
                  </label>
                )}
              </div>
              <div className="image-input">
                <input
                  type="file"
                  onChange={(e) => onImageChange(e, setImage2, 1)}
                  style={{ display: "none" }}
                  id="file2"
                />
                {image2 ? (
                  <img src={image2} alt="preview" className="image-preview" />
                ) : (
                  <label htmlFor="file2" className="label-container">
                    <Plusimage className="plusimage" />
                    <span>이미지를 업로드하세요</span>
                  </label>
                )}
              </div>
            </div>
            <div className="inputtxt">
              민원 상세 작성
              <text className="necessary">* 필수</text>
              <textarea
                type="text"
                name="complaint"
                className="complain-detail"
                placeholder="불편사항을 자세히 작성해주세요 . . ."
                onChange={handleReportDetailChange}
              />
            </div>
            <div className="notifications">
              휴대전화 인증 <text className="necessary">* 필수</text>
            </div>
            <div className="notifications-info">
              전화번호를 입력해주시면, 민원 처리에 대한 알림을 보내드려요
            </div>
            <div className="phone-input-area">
              <input
                type="text"
                name="phone"
                value={phoneNo}
                className="phone-input"
                onChange={handleInputChange}
                placeholder="전화번호를 입력해주세요."
              />
              <button className="phone-verify-btn" onClick={requestAuthNumber}>
                인증
              </button>
            </div>
            <div className="number-input-area">
              <input
                type="text"
                name="number"
                value={authCode}
                onChange={handleAuthCodeChange}
                className="number-input"
                placeholder="전송받은 인증번호를 입력해주세요."
              />
              <button className="number-verify-btn" onClick={verifyAuthNumber}>
                확인
              </button>
            </div>
            <button
              className={`submit-report ${isSubmitDisabled ? "disabled" : ""}`}
              onClick={handleSubmit}
              disabled={isSubmitDisabled}
            >
              민원 제출하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
