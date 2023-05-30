import React from "react";
import './progressbar.css'
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

function Ghrap() {
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
    <div
      style={{ paddingLeft: "270px", paddingRight: "10px", minWidth: "1400px" }}
    >
      
      <div className="row p-0 m-0">
        <div className="col-4 p-0">
          <div className="card">
            <div
              className="card-header align-items-center text-white p-2"
            >
              ผลการค้นหา
            </div>
            <div className=" ">
              <div className="card w-100 ">
                <div className="pt-3">
                  {dataset.map((data, index) => (
                    <div className="" key={index}>
                      {" "}
                      <p className="text px-3 py-0 my-0">{data.progressName}</p>
                      <div className="d-flex">
                      <div className="col d-flex justify-content-start py-0 my-0 ps-3">{data.progressName}</div>
                      <div className="col d-flex justify-content-end py-0 my-0 pe-5">{data.progressName}</div>

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
            <div
              className="card-header align-items-center text-white p-2"
            >
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
            <div
              className="card-header align-items-center text-white p-2"
              style={{ backgroundColor: "#FF971A" }}
            >
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
  );
}

export default Ghrap;
