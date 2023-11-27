import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SearchBox = (props) => {
  const [choice, setChoice] = useState("");
  const [search, setSearch] = useState("");
  const [operation, setOperation] = useState("");
  const [link, setLink] = useState("");
  let linkStr = `?choice=${choice}&search=${search}`;
  const { cate } = useParams();

  const getOtherParam = (link) => {
    if (
      cate === "all" ||
      cate === "smartShelter" ||
      cate === "smartSmokeBooth"
    ) {
      link += `&operation=${operation}`;
      setLink(link);
      console.log(link);
    }
  };

  const operOptions = [
    { val: "", name: "선택" },
    { val: "1", name: "정상운영" },
    { val: "0", name: "운영중지" },
    { val: "2", name: "공사중" },
  ];

  const Selector = ({ options, val, setVal }) => {
    return (
      <>
        <select
          value={val}
          onChange={(e) => setVal(e.target.value)}
          style={{ marginRight: "10px" }}
        >
          {options.map((option, i) => {
            return (
              <option key={i} value={option.val}>
                {option.name}
              </option>
            );
          })}
        </select>
      </>
    );
  };

  useEffect(() => {}, [link, linkStr]);

  return (
    <div className="search">
      <div className="search-content only">
        <span className="search-title">검색</span>
        {cate === "all" || "smartShelter" || "smartSmokeBooth" ? (
          <Selector
            options={operOptions}
            val={operation}
            setVal={setOperation}
          />
        ) : (
          ""
        )}
        <select value={choice} onChange={(e) => setChoice(e.target.value)}>
          <option value="">선택</option>
          {Object.values(props).map((prop, i) => {
            return (
              <option key={i} value={prop.value}>
                {prop.name}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Link to={`${link}`}>
        <button
          onClick={() => getOtherParam(linkStr)}
          style={{ textDecoration: "none" }}
        >
          검색
        </button>
      </Link>
    </div>
  );
};
export default SearchBox;
