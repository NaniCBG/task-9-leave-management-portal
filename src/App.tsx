import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layout/DashboardLayout";

// ================= DASHBOARD =================
import Welcome from "./pages/Welcome";

// ================= LEAVE MANAGEMENT =================
import LeaveManagement from "./pages/LeaveManagement";
import LeaveSettings from "./pages/LeaveSettings";
import LeaveRecall from "./pages/LeaveRecall";
import LeaveHistory from "./pages/LeaveHistory";
import ReliefOfficers from "./pages/ReliefOfficers";

// ================= EMPLOYEE MANAGEMENT =================
import EmployeeManagement from "./pages/EmployeeManagement";
import EmployeeProfile from "./pages/EmployeeProfile";

// Employee Profile Details
import EmployeePersonalDetails from "./pages/EmployeePersonalDetails";
import EmployeeContactDetails from "./pages/EmployeeContactDetails";
import EmployeeNextOfKin from "./pages/EmployeeNextOfKin";
import EmployeeEducation from "./pages/EmployeeEducation";
import EmployeeGuarantor from "./pages/EmployeeGuarantor";
import EmployeeFamily from "./pages/EmployeeFamily";
import EmployeeJob from "./pages/EmployeeJob";
import EmployeeFinancial from "./pages/EmployeeFinancial";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ==================================================
            MAIN DASHBOARD LAYOUT
            Sidebar + Header appear on every page
        ================================================== */}

        <Route element={<DashboardLayout />}>

          {/* ================= DASHBOARD ================= */}

          <Route
            path="/"
            element={<Welcome />}
          />


          {/* ==================================================
              LEAVE MANAGEMENT
          ================================================== */}

          <Route
            path="/leave-management"
            element={<LeaveManagement />}
          />

          <Route
            path="/leave-management/settings"
            element={<LeaveSettings />}
          />

          <Route
            path="/leave-management/recall"
            element={<LeaveRecall />}
          />

          <Route
            path="/leave-management/history"
            element={<LeaveHistory />}
          />

          <Route
            path="/leave-management/relief-officers"
            element={<ReliefOfficers />}
          />


          {/* ==================================================
              EMPLOYEE MANAGEMENT
          ================================================== */}

          {/* Employee Management List */}

          <Route
            path="/employee-management"
            element={<EmployeeManagement />}
          />


          {/* ==================================================
              EMPLOYEE PROFILE
          ================================================== */}

          {/* View Profile button opens this page */}

          <Route
            path="/employee-management/:employeeId/profile"
            element={<EmployeeProfile />}
          />


          {/* ==================================================
              EMPLOYEE PROFILE DETAILS
          ================================================== */}

          {/* Personal Details */}

          <Route
            path="/employee-management/:employeeId/personal"
            element={<EmployeePersonalDetails />}
          />

          {/* Contact Details */}

          <Route
            path="/employee-management/:employeeId/contact"
            element={<EmployeeContactDetails />}
          />

          {/* Next of Kin Details */}

          <Route
            path="/employee-management/:employeeId/next-of-kin"
            element={<EmployeeNextOfKin />}
          />

          {/* Education Qualifications */}

          <Route
            path="/employee-management/:employeeId/education"
            element={<EmployeeEducation />}
          />

          {/* Guarantor Details */}

          <Route
            path="/employee-management/:employeeId/guarantor"
            element={<EmployeeGuarantor />}
          />

          {/* Family Details */}

          <Route
            path="/employee-management/:employeeId/family"
            element={<EmployeeFamily />}
          />

          {/* Job Details */}

          <Route
            path="/employee-management/:employeeId/job"
            element={<EmployeeJob />}
          />

          {/* Financial Details */}

          <Route
            path="/employee-management/:employeeId/financial"
            element={<EmployeeFinancial />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;