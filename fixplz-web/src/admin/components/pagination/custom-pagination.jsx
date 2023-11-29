// import Pagination from "react-js-pagination";
// import "../../assets/scss/pagination.scss";

// const CustomPagination = ({ page, totalCnt, handlePagination }) => {
//   return (
//     <>
//       <Pagination
//         activePage={page}
//         itemsCountPerPage={10}
//         totalItemCount={totalCnt}
//         pageRangeDispalyed={5}
//         prevPageText={"‹"}
//         nextPageText={"›"}
//         onChange={handlePagination}
//       />
//     </>
//   );
// };
// export default CustomPagination;
import React, { useState } from "react";
import Pagination from "react-js-pagination";
import "../../assets/scss/pagination.scss";

const CustomPagination = () => {
  const [activePage, setActivePage] = useState(1);
  const itemsCountPerPage = 10;
  const totalItemCount = 50; // 총 아이템 개수입니다. 이 값을 변경하여 페이지 개수를 조절할 수 있습니다.

  const handlePagination = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  return (
    <>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemCount={totalItemCount}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePagination}
      />
    </>
  );
};

export default CustomPagination;
