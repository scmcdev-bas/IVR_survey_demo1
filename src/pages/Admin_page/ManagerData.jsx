import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
function ManagerData() {
  const [dataManager, setDataManager] = useState([]);

  useEffect(() => {
    
    searchDataSQL("");
    console.log(dataManager);
  }, []);
  const searchDataSQL = async (search) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/searchmanagerdata",
        {
          search,
        }
      );
      console.log(response.data);
      setDataManager(response.data);
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
          หัวหน้างาน / ข้อมูลหัวหน้างาน
        </div>
        <div>
          <h3 className="p-2">ข้อมูลหัวหน้างาน</h3>
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
                  <table className="table table-hove shadow-sm p-3 mb-5 bg-body-tertiary rounded py-5">
                    <thead>
                      <tr className="table-header">
                        <th scope="col">ลำดับ</th>
                        <th scope="col">รหัสหัวหน้างาน</th>
                        <th scope="col">ชื่อหัวหน้างาน</th>
                        <th scope="col">รหัสหน่วยงาน</th>
                        <th scope="col">ชื่อหน่วยงาน</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataManager.map((item, index) => (
                        <tr key={item.SUPERVISOR_ID}>
                          <th scope="row">{index + 1}</th>
                          <td>{item.SUPERVISOR_ID}</td>
                          <td>{item.SUPERVISOR_NAME}</td>
                          <td>{item.DIVISION_ID}</td>
                          <td>{item.DIVISION_NAME}</td>
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

export default ManagerData;
