import Pagination from "react-js-pagination";

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
