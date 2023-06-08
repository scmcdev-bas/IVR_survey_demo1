import "./App.css";
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPointPage from "./pages/user_page/SearchPointPage";
import PointReport from "./pages/user_page/PointReport";
import SummarizePointReport from "./pages/user_page/SummarizePointReport";
import Ghrap from "./pages/component/Ghrap";
import ManagerData from "./pages/Admin_page/ManagerData";
import InsertManagerData from "./pages/Admin_page/InsertManagerData";
import InsertEmployeeData from "./pages/Admin_page/InsertEmployeeData";
import EmployeeData from "./pages/Admin_page/EmployeeData";
import ManageUser from "./pages/Admin_page/ManageUser";
import UserMenu from "./MenuPage/UserMenu";
import AdminMenuPage from "./MenuPage/AdminMenuPage";
import LoginPage from "./pages/login/LoginPage";
import ErrorNotFoundPage from "./pages/notFound/ErrorNotFoundPage";
import DashboardUser from "./pages/user_page/DashboardUser";
import DashboardAdmin from "./pages/Admin_page/DashboardAdmin";

function App() {

  return (
    <>
    
      <BrowserRouter>
        {/* this is Menu user path. */}
        <Routes>
          <Route path="/pointreport" element={<><UserMenu/><PointReport /></>} />
          
          <Route path="/searchpointpage" element={<><UserMenu/><SearchPointPage /></>} />
          
          <Route path="/userdashboard" element={<><UserMenu/><DashboardUser/><Ghrap /></>} />


          <Route path="/userchart" element={<><UserMenu/><Ghrap /></>} />

          <Route path="/" element={<LoginPage/>}/>

        {/* this is Admin user path. */}
        <Route
            path="/summarizesearchpointpage" element={<><UserMenu/><SummarizePointReport /></>}
          />
          <Route path="/managerdata" element={<><AdminMenuPage /><ManagerData /></>} />

          <Route path="/insertmanagerdata" element={<><AdminMenuPage /><InsertManagerData /></>} />

          <Route path="/insertemployeedata" element={<><AdminMenuPage /><InsertEmployeeData /></>} />

          <Route path="/employeedata" element={<><AdminMenuPage /><EmployeeData /></>} />

          <Route path="/manageuser" element={<><AdminMenuPage /><ManageUser /></>} />

          <Route path="/admindashboard" element={<><AdminMenuPage /><DashboardAdmin/><Ghrap /></>} />

          <Route path="*" element={<ErrorNotFoundPage/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
