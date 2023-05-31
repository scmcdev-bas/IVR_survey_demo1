import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
function SearchPointPage() {
  const dataset = [
    { percent: 50, progressName: "dataset1" },
    { percent: 20, progressName: "dataset2" },
  ];
  const data = [
    {
      name: "dataset 1",
      1: 100,
      2: 250,
      3: 300,
      4: 200,
      5: 400,
    },
    {
      name: "dataset 1",
      1: 100,
      2: 250,
      3: 300,
      4: 200,
      5: 400,
    },
    {
      name: "dataset 1",
      1: 100,
      2: 250,
      3: 300,
      4: 200,
      5: 400,
    },
    {
      name: "dataset 1",
      1: 100,
      2: 250,
      3: 300,
      4: 200,
      5: 400,
    },
    {
      name: "dataset 1",
      1: 100,
      2: 250,
      3: 300,
      4: 200,
      5: 400,
    },
  ];
  return (
    <div>
      <div
        style={{
          paddingLeft: "270px",
          paddingRight: "10px",
          minWidth: "1200px",
        }}
      >
        <div className="alert alert-secondary w-50 p-2 mt-3" role="alert">
          this is path
        </div>
        <div>
          <h3 className="p-2">รายงานการให้คะแนน</h3>
        </div>
        <div className="card">
          <div
            className="h5 card-header align-items-center text-white p-2"
            style={{ backgroundColor: "#FF971A" }}
          >
            เงื่อนไขการค้นหา
          </div>
          <div className=" ">
            <div className="card w-100 ">
              <form style={{ width: "95%" }}>
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
        <div className="py-3">
          <div className="btn btn-success ">
            <dir className="d-flex p-0 m-0 justify-content-center align-items-center">
              <i className="bi bi-download"></i>
              <div className="ps-2">ดาวน์โหลดไฟล์เอกซ์เซล</div>
            </dir>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
        <div className="w-100" style={{ minWidth: "1200px"}}>
          <div className="row p-0 m-0">
            <div className="col-4 p-0">
              <div className="card">
                <div className="h5 card-header align-items-center text-white p-2">
                  ผลการค้นหา
                </div>
                <div className=" ">
                  <div className="card w-100 ">
                    <div className="pt-3">
                      {dataset.map((data, index) => (
                        <div className="" key={index}>
                          {" "}
                          <p className="text px-3 py-0 my-0">
                            {data.progressName}
                          </p>
                          <div className="d-flex">
                            <div className="col d-flex justify-content-start py-0 my-0 ps-3">
                              {data.progressName}
                            </div>
                            <div className="col d-flex justify-content-end py-0 my-0 pe-5">
                              {data.progressName}
                            </div>
                          </div>
                          <div className="mainDiv">
                            <div
                              className="childDiv"
                              style={{ width: `${data.percent}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="card">
                <div className="h5 card-header align-items-center text-white p-2">
                  ผลการค้นหา
                </div>
                <div className=" ">
                  <div className="card w-100 ">
                    <div className="d-flex justify-content-center py-3">
                      <BarChart width={730} height={250} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="1" fill="#8884d8" />
                        <Bar dataKey="2" fill="#82ca9d" />
                        <Bar dataKey="3" fill="#8884d8" />
                        <Bar dataKey="4" fill="#82ca9d" />
                        <Bar dataKey="5" fill="#82ca9d" />
                      </BarChart>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <div className="h5 card-header align-items-center text-white p-2">
                  ผลการค้นหา
                </div>
                <div className=" ">
                  <div className="card w-100 ">
                    <div className="d-flex justify-content-center py-3">
                      <BarChart width={730} height={250} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="1" fill="#8884d8" />
                        <Bar dataKey="2" fill="#82ca9d" />
                        <Bar dataKey="3" fill="#8884d8" />
                        <Bar dataKey="4" fill="#82ca9d" />
                        <Bar dataKey="5" fill="#82ca9d" />
                      </BarChart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default SearchPointPage;
