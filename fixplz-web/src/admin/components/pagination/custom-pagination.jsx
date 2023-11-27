import Pagination from "react-js-pagination";
import "../../assets/scss/pagination.scss";

const CustomPagination = ({ page, totalCnt, handlePagination }) => {
  return (
    <>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemCount={totalCnt}
        pageRangeDispalyed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePagination}
      />
    </>
  );
};
export default CustomPagination;
