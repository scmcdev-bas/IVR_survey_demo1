import React from "react";

function Table() {
  return (
    <div >
      <div className="card mb-4">
        <div
          className="card-header align-items-center text-white p-2" 
          style={{ backgroundColor: "#FF971A" }}
        >
          ผลการค้นหา
        </div>
        <div className=" " >
          <div className="d-flex justify-content-center">
            <div className="row p-2 mt-3 "style={{width : "95%"}}>
              <div>
                <div className="px-5">
                  <table className="table table-hove shadow-sm p-3 mb-5 bg-body-tertiary rounded py-5" >
                    <thead>
                      <tr className="">
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
      </div>
    </div>
  );
}

export default Table;
