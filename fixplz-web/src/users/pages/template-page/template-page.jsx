import "./kakao-map";
import React from "react";
import KakaoMap from "./kakao-map";
import "../../asset/styles/template-page.scss";
import { ReactComponent as Plusimage } from "../../asset/image/plusimage.svg";
import ReportCategory from "../../components/report-category";

function TextBox({ text, style }) {
  return <div style={style}>{text}</div>;
}

const TemplatePage = () => {
  const [image1, setImage1] = React.useState(null);
  const [image2, setImage2] = React.useState(null);

  const onImageChange = (event, setImage) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

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
          <TextBox
            text="시설물의 위치 정보가 담길 예정이에요"
            style={{ fontWeight: 900 }}
          />
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
                  onChange={(e) => onImageChange(e, setImage1)}
                  style={{ display: "none" }}
                  id="file1"
                />
                {image1 ? (
                  <img src={image1} alt="preview" />
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
                  onChange={(e) => onImageChange(e, setImage2)}
                  style={{ display: "none" }}
                  id="file2"
                />
                {image2 ? (
                  <img src={image2} alt="preview" />
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
              <input
                type="text"
                name="complaint"
                className="complain-detail"
                placeholder="불편사항을 자세히 작성해주세요..."
              />
            </div>
            <div className="notifications">
              알림 톡 받기 <text className="necessary">* 필수</text>
            </div>
            <div className="notifications-info">
              전화번호를 입력해주시면, 민원 처리에 대한 알림을 보내드릴게요
            </div>
            <div className="phone-input-area">
              <input
                type="text"
                name="phone"
                className="phone-input"
                placeholder="전화번호를 입력해주세요."
              />
              <button className="phone-verify-btn">인증</button>
            </div>
            <div className="number-input-area">
              <input
                type="text"
                name="number"
                className="number-input"
                placeholder="전송받은 인증번호를 입력해주세요."
              />
              <button className="number-verify-btn">확인</button>
            </div>
            <button className="submit-report">민원 제출하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
