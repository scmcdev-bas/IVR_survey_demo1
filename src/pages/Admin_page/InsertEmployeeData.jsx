import React from "react";

function InsertEmployeeData() {
  return (
    <div
      style={{ paddingLeft: "270px", paddingRight: "10px", minWidth: "1200px" }}
    >
      <div className="alert alert-secondary w-50 p-2 mt-3" role="alert">
        this is path
      </div>
      <div>
        <h3 className="p-2">นำเข้าข้อมูลเจ้าหน้าที่</h3>
      </div>
      <div className="card">
        <div className="h5  card-header align-items-center text-white p-2">
          นำเข้าข้อมูล
        </div>
        <div className="">
          <div className="card w-100 py-4">
            <form>
              <div className="row mb-3" style={{ width: "95%" }}>
                <div className="col-2 ms-3 mt-3">
                  <p>ประเภทข้อมูล :</p>
                  <br />
                  <p>เลือกไฟล์ที่ต้องการนำเข้า :</p>
                </div>
                <div className="col-5 ms-3 mt-3">
                  <div className="col-6 ">
                    <select className="form-select" id="floatingSelectGrid">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-9">
                    <input
                      type="file"
                      className="form-control mt-3"
                      id="floatingInput"
                    ></input>
                  </div>
                  <div className="btn btn-success mt-3">
                    <dir className="d-flex p-0 m-0 justify-content-center align-items-center">
                      <i className="bi bi-upload"></i>
                      <div className="ps-2">นำเข้าข้อมูลเจ้าหน้าที่</div>
                    </dir>
                  </div>
                </div>
                <div className="col-2 ms-3 mt-3">
                  <p>ตัวอย่างข้อมูล :</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsertEmployeeData;
