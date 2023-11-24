import React from "react";
import "../asset/styles/reportComplete.scss";
import { ReactComponent as Fin } from "../asset/image/fin.svg";

function ReportComplete() {
  return (
    <>
      <Fin className="svg-complete" width="100" height="100" />
      <div className="reporttxt">
        민원 접수가 완료되었습니다 <br />
      </div>
    </>
  );
}

export default ReportComplete;
