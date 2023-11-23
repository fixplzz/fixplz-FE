import React from "react";
import "../../asset/styles/reportComplete.scss";
import { ReactComponent as Complete } from "../../asset/image/complete.svg";

function ReportComplete() {
  return (
    <>
      <Complete className="svg-complete" width="70" height="70" />
      <div className="reporttxt">
        민원 접수가 완료되었습니다 <br />
      </div>
    </>
  );
}

export default ReportComplete;
