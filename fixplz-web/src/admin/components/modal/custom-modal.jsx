import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CustomModal = (props) => {
  const separator = ", ";
  const { cate } = useParams();
  const [data, setData] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const requestURL = `${process.env.REACT_APP_API_URL}/api/v1/${props.from}`;
  const from = props.from;

  const getTarget = () => {
    if (props.checked.length !== 0) {
      axios
        .get(requestURL + `/${props.checked[0].facilityNo}`)
        .then((resp) => {
          setData(resp.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const delTargets = () => {
    axios
      .delete(requestURL, props.checked)
      .then((resp) => {
        if (resp.message === "시설물 삭제에 성공하였습니다.") {
          alert("삭제 완료");
          props.onHide();
        } else {
          alert("삭제 실패.");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const ModalBody = () => {
    if (props.category === "update") {
      if (from === "facility")
        return <FacilityUpdate data={data} onHide={props.onHide} />;
    } else if (props.category === "delete") {
      if (from === "facility") return "해당 시설물을 삭제하시겠습니까?";
    } else if (props.category === "insert") {
      if (from === "facility") return <FacilityRegist onHide={props.onHide} />;
    }
  };

  useEffect(() => {
    getTarget();
  }, [props]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="modal-max-width"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>[ {props.checked.join(separator)} ]</div>
      </Modal.Body>
      <Modal.Body>
        {props.category === "delete" ? (
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
              취소
            </Button>
            <Button variant="primary" onClick={delTargets}>
              확인
            </Button>
          </Modal.Footer>
        ) : (
          ""
        )}
      </Modal.Body>
    </Modal>
  );
};
export default CustomModal;
