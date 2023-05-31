import React from "react";
import Table from "../component/Table";
import FormRating from "../component/FormRating";
function SummarizePointReport() {
  return (
    <div
      style={{ paddingLeft: "270px", paddingRight: "10px", minWidth: "1200px" }}
    >
      <div className="alert alert-secondary w-50 p-2 mt-3" role="alert">
        this is path
      </div>
      <div>
        <h3 className="p-2">รายงานสรุปการให้คะแนน</h3>
      </div>
      <div className="card mb-3">
        <div className="h5 card-header align-items-center text-white p-2">
          เงื่อนไขการค้นหา
        </div>
        <div className="">
          <div className="" style={{ width: "90%" }}>
            <form>
              <div className="row align-items-center p-2 mt-3 ">
                <div className="col-2 px-5">
                  <div>วันที่เวลา :</div>
                </div>
                <div className="col-5">วันที่เริ่มต้น</div>
                <div className="col-3">วันที่สิ้นสุด</div>
              </div>
              <div className="row align-items-center p-2">
                <div className="col-2 "></div>
                <div className="col-2">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="DD/MM/YY"
                  ></input>{" "}
                </div>
                <div className="col-2 d-flex">
                  <input
                    type="text"
                    className="form-control text-center"
                    placeholder="00"
                    style={{ maxWidth: "50px" }}
                  ></input>{" "}
                  <h3 className="px-1"> : </h3>
                  <input
                    type="text"
                    className="form-control text-center"
                    placeholder="00"
                    style={{ maxWidth: "50px" }}
                  ></input>{" "}
                </div>
                <div className="col-1"></div>
                <div className="col-2">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="DD/MM/YY"
                  ></input>{" "}
                </div>
                <div className="col-2 d-flex">
                  <input
                    type="text"
                    className="form-control text-center"
                    placeholder="00"
                    style={{ maxWidth: "50px" }}
                  ></input>{" "}
                  <h3 className="px-1"> : </h3>
                  <input
                    type="text"
                    className="form-control text-center"
                    placeholder="00"
                    style={{ maxWidth: "50px" }}
                  ></input>{" "}
                </div>
                <div className="row p-2 mt-3">
                  <div className="col-2 px-5 pt-1 ">ประเภทรายงาน :</div>
                  <div className="col-2 ms-2">
                    <select className="form-select" id="floatingSelectGrid">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-2 px-5 pt-1 ">หัวข้อการประเมิน :</div>
                  <div className="col-2 ms-1">
                    <select className="form-select" id="floatingSelectGrid">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="row p-2 z">
                  <div className="col-2 px-5 pt-1 ">หัวหน้างาน :</div>
                  <div className="col-2 ms-2">
                    <select className="form-select" id="floatingSelectGrid">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-1"></div>

                  <div className="col-2 px-5 pt-1 ">เจ้าหน้าที่ :</div>
                  <div className="col-2 ms-1">
                    <select className="form-select" id="floatingSelectGrid">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="row p-2 ">
                  <div className="col-2 px-5 pt-1 ">เบอร์โทรลูกค้า :</div>
                  <div className="col-2 ms-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="090-000-0000"
                    ></input>{" "}
                  </div>
                </div>
                <div className="row p-2 ">
                  <div className="col-2 px-5 pt-1 ">คะแนน :</div>
                  <div className="col-5 ms-2 d-flex mt-2">
                    <div className="me-3 ms-1">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        name="customRadioInline1"
                        className="me-1"
                      ></input>
                      <label className="" htmlFor="">
                        1{" "}
                      </label>
                    </div>
                    <div className="me-3">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        name="customRadioInline1"
                        className="me-1"
                      ></input>
                      <label className="" htmlFor="">
                        2{" "}
                      </label>
                    </div>
                    <div className="me-3">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        name="customRadioInline1"
                        className="me-1"
                      ></input>
                      <label className="" htmlFor="">
                        3{" "}
                      </label>
                    </div>
                    <div className="me-3">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        name="customRadioInline1"
                        className="me-1"
                      ></input>
                      <label className="" htmlFor="">
                        4{" "}
                      </label>
                    </div>
                    <div className="me-3">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        name="customRadioInline1"
                        className="me-1"
                      ></input>
                      <label className="" htmlFor="">
                        5{" "}
                      </label>
                    </div>
                    <div className="me-3">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        name="customRadioInline1"
                        className="me-1"
                      ></input>
                      <label className="" htmlFor="">
                        NO INPUT{" "}
                      </label>
                    </div>
                    <div className="me-3">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        name="customRadioInline1"
                        className="me-1"
                      ></input>
                      <label className="" htmlFor="">
                        NO MATCH{" "}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mt-5 mb-3">
                  <div className="col-2"></div>
                  <div className="col-2">
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
            </form>
          </div>
        </div>
      </div>{" "}
      <div className="pb-3">
        <div className="py-0">
          <div className="btn btn-success ">
            <dir className="d-flex p-0 m-0 justify-content-center align-items-center">
              <i className="bi bi-download"></i>
              <div className="ps-2">ดาวน์โหลดไฟล์เอกซ์เซล</div>
            </dir>
          </div>
        </div>
      </div>
      <div className="card mb-4">
        <div className="h5 card-header align-items-center text-white p-2">
          ผลการค้นหา
        </div>
        <div className=" ">
          <div className="d-flex justify-content-center">
            <div className="row p-2 mt-3 " style={{ width: "100%" }}>
              <div>
                <div className="px-5">
                  <table className="table table-hove shadow-sm p-3 mb-5 bg-body-tertiary rounded py-5">
                    <thead>
                      <tr className="table-header align-middle">
                        <th scope="col" style={{ width: "5%" }}>
                          ลำดับที่
                        </th>
                        <th scope="col" style={{ width: "16%" }}>
                          ชื่อเจ้าหน้าที่
                        </th>
                        <th scope="col" style={{ width: "10%" }}>
                          ค่าเฉลี่ยรายบุคคล (ไม่รวม no Input/No Match)
                        </th>
                        <th scope="col" style={{ width: "10%" }}>
                          เปอร์เซ๋นต์เปรียบเทียบทั้งหมด (ไม่รวม no Input/No
                          Match)
                        </th>
                        <th scope="col" style={{ width: "5%" }}>
                          สายทั้งหมดจำนวน
                        </th>
                        <th scope="col" style={{ width: "2%" }}>
                          %
                        </th>
                        <th scope="col" style={{ width: "5%" }}>
                          คำแนน 5 จำนวน
                        </th>
                        <th scope="col" style={{ width: "2%" }}>
                          %
                        </th>
                        <th scope="col" style={{ width: "5%" }}>
                          คำแนน 4 จำนวน
                        </th>
                        <th scope="col" style={{ width: "2%" }}>
                          %
                        </th>
                        <th scope="col" style={{ width: "5%" }}>
                          คำแนน 3 จำนวน
                        </th>
                        <th scope="col" style={{ width: "2%" }}>
                          %
                        </th>
                        <th scope="col" style={{ width: "5%" }}>
                          คำแนน 2 จำนวน
                        </th>
                        <th scope="col" style={{ width: "2%" }}>
                          %
                        </th>
                        <th scope="col" style={{ width: "5%" }}>
                          คำแนน 1{" "}
                        </th>
                        <th scope="col" style={{ width: "2%" }}>
                          %
                        </th>
                        <th scope="col" style={{ width: "8%" }}>
                          No Input จำนวน
                        </th>
                        <th scope="col" style={{ width: "2%" }}>
                          %
                        </th>
                        <th scope="col" style={{ width: "5%" }}>
                          No Match จำนวน
                        </th>
                        <th scope="col" style={{ width: "2%" }}>
                          %
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="">
                        <th scope="" style={{ width: "5%" }}>
                          ไม่มีข้อมูล
                        </th>
                        <th scope="col" style={{ width: "10%" }}></th>
                        <th scope="col" style={{ width: "16%" }}></th>
                        <th scope="col" style={{ width: "10%" }}></th>
                        <th scope="col" style={{ width: "5%" }}></th>
                        <th scope="col" style={{ width: "2%" }}></th>
                        <th scope="col" style={{ width: "5%" }}></th>
                        <th scope="col" style={{ width: "2%" }}></th>
                        <th scope="col" style={{ width: "5%" }}></th>
                        <th scope="col" style={{ width: "2%" }}></th>
                        <th scope="col" style={{ width: "5%" }}></th>
                        <th scope="col" style={{ width: "2%" }}></th>
                        <th scope="col" style={{ width: "5%" }}></th>
                        <th scope="col" style={{ width: "2%" }}></th>
                        <th scope="col" style={{ width: "5%" }}></th>
                        <th scope="col" style={{ width: "2%" }}></th>
                        <th scope="col" style={{ width: "8%" }}></th>
                        <th scope="col" style={{ width: "2%" }}></th>
                        <th scope="col" style={{ width: "5%" }}></th>
                        <th scope="col" style={{ width: "2%" }}></th>
                      </tr>

                      <tr className="">
                        <th scope="col" style={{ width: "5%" }}>
                          0 รายการ{" "}
                        </th>
                        <th scope="col" style={{ width: "10%" }}></th>
                        <th scope="col" style={{ width: "16%" }}></th>
                        <th scope="col" style={{ width: "10%" }}></th>
                        <th scope="col" style={{ width: "5%" }}></th>
                        <th scope="col" style={{ width: "2%" }}></th>
                        <th scope="col" style={{ width: "5%" }}></th>
                        <th scope="col" style={{ width: "2%" }}></th>
                        <th scope="col" style={{ width: "5%" }}></th>
                        <th scope="col" style={{ width: "2%" }}></th>
                        <th scope="col" style={{ width: "5%" }}></th>
                        <th scope="col" style={{ width: "2%" }}></th>
                        <th scope="col" style={{ width: "5%" }}></th>
                        <th scope="col" style={{ width: "2%" }}></th>
                        <th scope="col" style={{ width: "5%" }}></th>
                        <th scope="col" style={{ width: "2%" }}></th>
                        <th scope="col" style={{ width: "8%" }}></th>
                        <th scope="col" style={{ width: "2%" }}></th>
                        <th scope="col" style={{ width: "5%" }}></th>
                        <th scope="col" style={{ width: "2%" }}></th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default SummarizePointReport;
