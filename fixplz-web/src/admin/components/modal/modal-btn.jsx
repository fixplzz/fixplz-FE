import { useState } from "react";
import CustomModal from "./custom-modal";
import { useSearchParams } from "react-router-dom";

const ModalBtn = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ModalHeader, setModalHeader] = useState();
  const [checkedList, setCheckedList] = useState([]);
  const [from, setFrom] = useState("");
  const [category, setCategory] = useState("");
  const [searchParam, setSearchParam] = useSearchParams();

  return (
    <>
      {Object.values(props).map((prop, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              if (prop.list.length === 0 && prop.cate !== "insert")
                return alert("값 체크 후 다시 시도해주세요.");
              else if (prop.list.length > 1 && prop.cate === "update")
                return alert("하나의 값만 체크해주세요.");
              else {
                searchParam.set("target", prop.list);
                setSearchParam(searchParam);
              }

              setModalIsOpen(true);
              setCheckedList(prop.list);
              setFrom(prop.from);
              setCategory(prop.cate);
              setModalHeader(prop.name);
            }}
          >
            {prop.name}
          </button>
        );
      })}
      <CustomModal
        show={modalIsOpen}
        onHide={() => setModalIsOpen(false)}
        checked={checkedList}
        from={from}
        category={category}
        header={ModalHeader}
      />
    </>
  );
};
export default ModalBtn;
