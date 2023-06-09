import axios from "axios";
import React, { useEffect, useState } from "react";
function EmployeeData() {
  const [dataEmployee, setDataEmployee] = useState([]);

  useEffect(() => {
    
    searchDataSQL("");
    console.log(dataEmployee);
  }, []);
    const searchDataSQL= async (search) => {
      try {
        const response = await axios.post("http://localhost:3001/searchagentdata", {
        search
        });
        console.log(response.data);
        setDataEmployee(response.data)
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <>
      <div
        style={{
          paddingLeft: "270px",
          paddingRight: "10px",
          minWidth: "1200px",
        }}
      >
        <div className="alert alert-secondary w-50 p-2 mt-3" role="alert">
          พนักงาน / ข้อมูลพนักงาน
        </div>
        <div>
          <h3 className="p-2">ข้อมูลเจ้าหน้าที่</h3>
        </div>
        <div className="card">
          <div className="h5  card-header align-items-center text-white p-2">
            ผลการค้นหา
          </div>
          <div className=" ">
            <div className="card w-100 ">
              <form>
                <div className="d-flex justify-content-end">
                  <div className="btn btn-success m-3 mb-0 d-flex align-items-center">
                    <dir className="d-flex p-0 m-0 justify-content-center align-items-center">
                      <i className="bi bi-download"></i>
                      <div className="ps-2">ดาวน์โหลดไฟล์เอกซ์เซล</div>
                    </dir>
                  </div>
                </div>
                <div className="d-flex justify-content-center pt-4">
                  <input
                  onChange={(e) => searchDataSQL(e.target.value)}
                    type="text"
                    className="form-control m-3"
                    id="floatingInput"
                    placeholder="พิมพ์เพื่อกรองข้อมูล......"
                    style={{ width: "300px" }}
                  ></input>
                </div>

                <div className="d-flex justify-content-center p-5">
                  <table className="table table-hover shadow-sm p-3 mb-5 bg-body-tertiary rounded ">
                    <thead>
                      <tr className="table-header">
                        <th scope="col">ลำดับ</th>
                        <th scope="col">รหัสเจ้าหน้าที่</th>
                        <th scope="col">ชื่อเจ้าหน้าที่</th>
                        <th scope="col">รหัสหน่วยงาน</th>
                        <th scope="col">ชื่อหน่วยงาน</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataEmployee.map((item, index) => (
                        <tr key={item.AGENT_ID}>
                          <th scope="row">{index+1}</th>
                          <td>{item.AGENT_ID}</td>
                          <td>{item.AGENT_NAME}</td>
                          <td>{item.SUPERVISOR_ID}</td>
                          <td>{item.SUPERVISOR_NAME}</td>
                        </tr>
                      ))}
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

export default EmployeeData;
