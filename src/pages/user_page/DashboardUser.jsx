import React from "react";
import "../component/progressbar.css";
import axios from "axios";
import th from "./MessageComponent/DashboardUserTH";
import en from "./MessageComponent/DashboardUserEN";

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { useEffect } from "react";
import { useState } from "react";
function DashboardUser() {
  const languages = {
    th,
    en,
  };
  const language = localStorage.getItem("language");  



  
  const [data, setData] = useState([]);
  const [dataPercentage, setDataPercentage] = useState([]);
  const [dataPercentageLenth, setDataPercentageLenth] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const getdata = async () => {
    try {
      const response = await axios.get("http://localhost:3001/getdataset", {});
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getdatapercentage = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/getdatasetpercentage",
        {}
      );
      setDataPercentageLenth(response.data[0]);
      setDataPercentage(response.data[1]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
    getdatapercentage();
  }, []);

  useEffect(() => {
    console.log(data);
    console.log(dataPercentage);
    console.log(dataPercentageLenth);
  }, [data, dataPercentage, dataPercentageLenth]);

  return (
    <div
      style={{ paddingLeft: "270px", paddingRight: "10px", minWidth: "1200px" }}
    >
      <div className="alert alert-secondary w-50 p-2 mt-3" role="alert">
        this is path
      </div>
      <div>
        <h3 className="p-2">{languages[language].dashboard}</h3>
      </div>
      <div className="row p-0 m-0">
        <div className="col-4 p-0">
          <div className="card">
            <div className="h5 card-header align-items-center text-white p-2">
              {languages[language].search_results}
            </div>
            <div className=" ">
              <div className="card w-100 ">
                <div className="pt-3">
                  <div className="px-2 py-0 my-0 ps-3">
                    <h3 style={{ display: "inline" }}>
                      {" "}
                      {languages[language].today}
                    </h3>
                    <p className="ps-3 fs-5" style={{ display: "inline" }}>
                      {currentTime.toLocaleTimeString()}
                    </p>
                    <p className="py-0 my-0" style={{ color: "#7e7e7e" }}>
                      ( {languages[language].total_call} {dataPercentageLenth} )
                    </p>
                  </div>
                  <div className="d-flex justify-content-center my-0 py-0">
                    <hr style={{ width: "90%" }} />{" "}
                  </div>
                  {dataPercentage.map((data, index) => (
                    <div className="px-3 pe-0" key={index}>
                      <div className="mt-2">
                        <h4 className="text px-3 py-0 my-0">{data.value}</h4>
                        <div className="d-flex">
                          <div className="col d-flex justify-content-start py-0 my-0 ps-3">
                            {data.name}{" "}
                          </div>
                          <div className="col d-flex justify-content-end py-0 my-0 pe-5">
                            <p className="pe-1 py-0 my-0">
                              {data.valuepercentage}%
                            </p>
                          </div>
                        </div>
                        <div className="mainDiv">
                          <div
                            className="childDiv"
                            style={{ width: `${data.valuepercentage}%` }}
                          ></div>
                        </div>
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
              {languages[language].search_results}
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
                    <Bar dataKey="Score1" fill="#008EBB" />
                    <Bar dataKey="Score2" fill="#33CEFF" />
                    <Bar dataKey="Score3" fill="#008EBB" />
                    <Bar dataKey="Score4" fill="#33CEFF" />
                    <Bar dataKey="Score5" fill="#008EBB" />
                  </BarChart>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <div className="h5 card-header align-items-center text-white p-2">
              {languages[language].search_results}
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
                    <Bar dataKey="Score1" fill="#008EBB" />
                    <Bar dataKey="Score2" fill="#33CEFF" />
                    <Bar dataKey="Score3" fill="#008EBB" />
                    <Bar dataKey="Score4" fill="#33CEFF" />
                    <Bar dataKey="Score5" fill="#008EBB" />
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

export default DashboardUser;
