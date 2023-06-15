import axios from "axios";
import React from "react";
import th from "./MessageComponent/SummarizePointReportTH";
import en from "./MessageComponent/SummarizePointReportEN";
function SummarizePointReport() {
  const languages = {
    th,
    en,
  };
  const language = localStorage.getItem("language");  
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
        <h3 className="p-2">{languages[language].ratingsReport}</h3>
      </div>
      <div className="card mb-3">
        <div className="h5 card-header align-items-center text-white p-2">
        {languages[language].searchConditions}
        </div>
        <div className="">
          <div className="" style={{ width: "90%" }}>
            <form>
              <div className="row align-items-center p-2 mt-3 ">
                <div className="col-2 px-5">
                  <div>          {languages[language].dateandTime}
</div>
                </div>
                <div className="col-5">{languages[language].startDate}</div>
                <div className="col-3">{languages[language].endDate}</div>
              </div>
              <div className="row align-items-center p-2">
                <div className="col-2 "></div>
                <div className="col-2">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="YYYY/MM/DD"
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
                    placeholder="YYYY/MM/DD"
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
                  <div className="col-2 px-5 pt-1 ">  {languages[language].reportType} :</div>
                  <div className="col-2 ms-2">
                    <select className="form-select" id="floatingSelectGrid">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-2 px-5 pt-1 ">  {languages[language].assessmentTopics}</div>
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
                  <div className="col-2 px-5 pt-1 ">  {languages[language].supervisor}</div>
                  <div className="col-2 ms-2">
                    <select className="form-select" id="floatingSelectGrid">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-1"></div>

                  <div className="col-2 px-5 pt-1 ">  {languages[language].agent}</div>
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
                  <div className="col-2 px-5 pt-1 ">  {languages[language].custumertel}</div>
                  <div className="col-2 ms-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="090-000-0000"
                    ></input>{" "}
                  </div>
                </div>
                <div className="row p-2 ">
                  <div className="col-2 px-5 pt-1 ">  {languages[language].rating}</div>
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
                    <div
                      style={{ width: "100px" }}
                      className="btn btn-success  "
                    >
                      {languages[language].search}
                    </div>
                  </div>
                  <div className="col justify-content-start">
                    <button
                      style={{ width: "100px" }}
                      className="btn btn-warning  "
                    >
                      {languages[language].reset}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>{" "}
      <div className="pb-3">
        <div className="btn btn-success ">
          <dir className="d-flex p-0 m-0 justify-content-center align-items-center">
            <i className="bi bi-download"></i>
            <div className="ps-2">  {languages[language].download}</div>
          </dir>
        </div>
      </div>
      <div className="card mb-4">
        <div className="h5 card-header align-items-center text-white p-2">
        {languages[language].searchResult}
        </div>
        <div className=" ">
          <div className="d-flex justify-content-center">
            <div className="row p-2 mt-3 " style={{ width: "100%" }}>
              <div>
                <div className="px-5">
                  <table className="table table-hover shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                    <thead>
                      <tr className="table-header align-middle">
                        <th scope="col" style={{ width: "5%" }}>
                        {languages[language].no}
                        </th>
                        <th scope="col" style={{ width: "16%" }}>
                        {languages[language].name}
                        </th>
                        <th scope="col" style={{ width: "10%" }}>
                        {languages[language].Individual}                          </th>
                        <th scope="col" style={{ width: "10%" }}>
                        {languages[language].comparison}
                        </th>
                        <th scope="col" style={{ width: "5%" }}>
                        {languages[language].totalCall}                          </th>
                        <th scope="col" style={{ width: "2%" }}>
                          %
                        </th>
                        <th scope="col" style={{ width: "5%" }}>
                        {languages[language].rate5}                          </th>
                        <th scope="col" style={{ width: "2%" }}>
                          %
                        </th>
                        <th scope="col" style={{ width: "5%" }}>
                        {languages[language].rate4}                          </th>
                        <th scope="col" style={{ width: "2%" }}>
                          %
                        </th>
                        <th scope="col" style={{ width: "5%" }}>
                        {languages[language].rate3}                          </th>
                        <th scope="col" style={{ width: "2%" }}>
                          %
                        </th>
                        <th scope="col" style={{ width: "5%" }}>
                        {languages[language].rate2}                          </th>
                        <th scope="col" style={{ width: "2%" }}>
                          %
                        </th>
                        <th scope="col" style={{ width: "5%" }}>
                        {languages[language].rate1}                          </th>
                        <th scope="col" style={{ width: "2%" }}>
                          %
                        </th>
                        <th scope="col" style={{ width: "5%" }}>
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
                    <tbody style={{textAlign:"center"}}>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  </div>
  );
}

export default SummarizePointReport;
