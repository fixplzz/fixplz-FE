import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import CustomPagination from "../pagination/custom-pagination";

const AdminSearch = (props) => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [totalCnt, setTotalCnt] = useState(0);

  const { cate } = useParams();
  const [params] = useState({});

  let requestURL = `${process.env.REACT_APP_API_URL}/api/v1/facility`;

  const searching = () => {
    const choice = searchParams.get("choice");
    const search = searchParams.get("search");
    const operation = searchParams.get("operation");

    params.choice = choice;
    params.search = search;
    params.operation = operation;
  };

  const getDataList = (page) => {
    params.page = page;

    // axios
    //   .get(requestURL, { params: params })
    //   .then((resp) => {
    //     console.log(resp.data);
    //     props.setData(resp.data.list);
    //     setTotalCnt(resp.data.cnt);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  const handlePagination = (page) => {
    setPage(page);
    getDataList(page - 1);
  };

  useEffect(() => {
    searching();
    getDataList();
  }, [searchParams]);

  return (
    <div className="pagination">
      <a href="#">&laquo;</a>
      <a className="active" href="#">
        1
      </a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">&raquo;</a>
      {/* <CustomPagination
        page={page}
        totalCnt={totalCnt}
        handlePagination={handlePagination}
      /> */}
    </div>
  );
};

export default AdminSearch;
