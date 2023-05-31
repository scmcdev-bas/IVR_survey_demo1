import React from "react";

function ManagerData() {
  return (
    <>
      <div style={{ paddingLeft: "270px", paddingRight: "10px" ,minWidth: "1200px"}}>
        <div className="alert alert-secondary w-50 p-2 mt-3" role="alert">
          this is path
        </div>
        <div>
          <h3 className="p-2">ข้อมูลหัวหน้างาน</h3>
        </div>
        <div className="card">
          <div
            className="card-header align-items-center text-white p-2"
          >
            ผลการค้นหา
          </div>
          <div className=" ">
            <div className="card w-100 ">
              <form>
                <div className="d-flex justify-content-center pt-4">
                  <input
                    type="text"
                    className="form-control m-3"
                    id="floatingInput"
                    placeholder="พิมพ์เพื่อกรองข้อมูล......"
                    style={{ width: "300px" }}
                  ></input>
                </div>
                <div className="btn btn-success ms-3">
                  ดาวน์โหลดไฟล์เอกซ์เซล
                </div>
                <div className="d-flex justify-content-center p-5">
                  <table className="table table-hover shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                    <thead>
                      <tr className="table-header">
                        <th scope="col">ลำดับ</th>
                        <th scope="col">รหัสเจ้าหน้าที่</th>
                        <th scope="col">ชื่อหัวเจ้าหน้าที่</th>
                        <th scope="col">รหัสหน่วยงาน</th>
                        <th scope="col">ชื่อหน่วยงาน</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>data1</td>
                        <td>data1</td>
                        <td>data1</td>
                        <td>data1</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>data1</td>
                        <td>data1</td>
                        <td>data1</td>
                        <td>data1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default ManagerData;
