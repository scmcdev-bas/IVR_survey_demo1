import React from "react";

function FormRating() {
  return (
    <div className="card mb-3" >
      <div
        className="card-header align-items-center text-white p-2"
        style={{ backgroundColor: "#FF971A" }}
      >
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
                  style={{maxWidth: "50px"}}
                ></input>{" "}
                <h3 className="px-1"> : </h3>
                <input
                  type="text"
                  className="form-control text-center"
                  placeholder="00"
                  style={{maxWidth: "50px"}}
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
                  placeholder="00" style={{maxWidth: "50px"}}
                ></input>{" "}
                <h3 className="px-1"> : </h3>
                <input
                  type="text"
                  className="form-control text-center"
                  placeholder="00" style={{maxWidth: "50px"}}
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
                <div className="col-4 ms-2 d-flex mt-2">
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
    </div>
  );
}

export default FormRating;
