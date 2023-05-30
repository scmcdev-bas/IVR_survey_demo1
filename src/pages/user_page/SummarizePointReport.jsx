import React from "react";
import Table from "../component/Table";
import FormRating from "../component/FormRating";
function SummarizePointReport() {
  return (
    <div style={{ paddingLeft: "270px", paddingRight: "10px" ,minWidth: "1200px" }}>
        <div className="alert alert-secondary w-50 p-2 mt-3" role="alert">
          this is path
        </div>
        <div>
          <h3 className="p-2">รายงานสรุปการให้คะแนน</h3>
        </div>
        <FormRating/>
        <Table/>
      </div>
  );
}

export default SummarizePointReport;
