import React from "react";
import Ghrap from "../component/Ghrap";
function SearchPointPage() {
  return (
    <div>
      <div style={{ paddingLeft: "270px", paddingRight: "10px" ,minWidth: "1200px" }}>
        <div className="alert alert-secondary w-50 p-2 mt-3" role="alert">
          this is path
        </div>
        <div>
          <h3 className="p-2">รายงานการให้คะแนน</h3>
        </div>
        <div className="card">
          <div
            className="card-header align-items-center text-white p-2"
            style={{ backgroundColor: "#FF971A" }}
          >
            เงื่อนไขการค้นหา
          </div>
          <div className=" ">
            <div className="card w-100 ">
              <form style={{width : "95%"}}>
                <div className="row align-items-center p-2 mt-3 ">
                  <div className="col-2 px-5">
                    <div>วันที่</div>
                  </div>
                  <div className="col-3">วันที่เริ่มต้น</div>
                  <div className="col-3">วันที่สิ้นสุด</div>
                </div>
                <div className="row align-items-center p-2">
                  <div className="col-2 "></div>
                  <div className="col-3">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="DD/MM/YY"
                    ></input>{" "}
                  </div>
                  <div className="col-3">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="DD/MM/YY"
                    ></input>
                  </div>
                  <div className="row p-2 mt-3">
                    <div className="col-2 px-5">ประเภทรายงาน</div>
                    <div className="col-3">
                      <div className="row px-4">
                        <div className="form-check ">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            defaultChecked
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            รายชั่วโมง{" "}
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            รายวัน{" "}
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault3"
                          >
                            รายเดือน{" "}
                          </label>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col">
                          <button
                            style={{ width: "100px" }}
                            className="btn btn-success  "
                          >
                            ค้นหา
                          </button>
                        </div>
                        <div className="col justify-content-start">
                          <button
                            style={{ width: "100px" }}
                            className="btn btn-warning  "
                          >
                            รีเซต
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="p-3">
          <button className="btn btn-info text-white">
            ดาวน์โหลดไฟล์เอกซ์เซล
          </button>
        </div>
      </div>
     <div className="d-flex justify-content-center align-items-center">
     <div className="" style={{minWidth : "1200px",width : "95%"}}>
        <Ghrap />
      </div>
     </div>
    </div>
  );
}

export default SearchPointPage;
