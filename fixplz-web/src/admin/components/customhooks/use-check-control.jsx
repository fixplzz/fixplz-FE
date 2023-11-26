import { useState } from "react";
import { useParams } from "react-router-dom";

const useCheckControl = ({ dataList }) => {
  const [checkedList, setCheckedList] = useState([]);
  const { cate } = useParams();

  // 전체 체크
  const handleAllCheck = (checked) => {
    if (checked) {
      const checkedArray = [];
      dataList.forEach((element) => {
        let allcheck;
        if (
          cate === "all" ||
          cate === "smartShelter" ||
          cate === "smartSmokeBooth"
        )
          allcheck = element.facilityNo;

        checkedArray.push(allcheck);
      });
      setCheckedList(checkedArray);
    }
    if (!checked) {
      setCheckedList([]);
    }
  };

  // 개별 체크
  const handleSingleCheck = (checked, id) => {
    if (checked) setCheckedList((prev) => [...prev, id]);
    if (!checked) setCheckedList(checkedList.filter((item) => item !== id));
  };

  return { handleAllCheck, handleSingleCheck, checkedList };
};

export default useCheckControl;
