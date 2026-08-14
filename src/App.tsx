import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layout/DashboardLayout";

import Welcome from "./pages/Welcome";
import LeaveManagement from "./pages/LeaveManagement";
import LeaveSettings from "./pages/LeaveSettings";
import LeaveRecall from "./pages/LeaveRecall";
import LeaveHistory from "./pages/LeaveHistory";
import ReliefOfficers from "./pages/ReliefOfficers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Welcome />} />

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;