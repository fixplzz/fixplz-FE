import axios from "axios";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";

function DaumPost(props) {
  //클릭 시 수행될 팝업 생성 함수
  const open = useDaumPostcodePopup(postcodeScriptUrl);
  //주소 선택 시 처리될 함수
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let administrateDong = data.bname;
    let localAddress = data.sido + " " + data.sigungu;

    //조건 판단 완료 후 지역 주소 및 상세주소 state 수정
    props.setAddressObj(fullAddress);
    props.setAdministrateDong(administrateDong);
    //주소 검색이 완료된 후 결과를 매개변수로 전달
    if (props.setLatitude) {
      getLocation(fullAddress);
    }
  };

  //클릭 시 발생할 이벤트
  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  /*
    -주소반환값을 기준으로 좌표를 획득하는 함수
    -address : daumpost에서 검색된 결과값 주소
  */
  const getLocation = (address) => {
    console.log("여기까진 잘 옵니다.");
    axios
      .get(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${address}`,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API}`,
          }, //Rest API Key 적용
        }
      )
      .then((res) => {
        const location = res.data.documents[0];
        props.setLatitude(location.address.y);
        props.setLongitude(location.address.x);
        // props.setLocationObj({
        //   //검색해서 얻은 위치의 좌표를 획득
        //   locationX: location.address.x,
        //   locationY: location.address.y,
        // });
      });
  };
  return (
    <button type="button" btName="주소찾기" onClick={handleClick}>
      주소 찾기
    </button>
  );
}

export default DaumPost;
