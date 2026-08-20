import { NavLink } from "react-router-dom";

import {
  FaThLarge,
  FaEnvelope,
  FaBriefcase,
  FaUsers,
  FaFileAlt,
  FaUser,
  FaBookOpen,
  FaBalanceScale,
  FaMoneyBillWave,
  FaPowerOff,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* ================= LOGO ================= */}
      <div className="logo">
        <span className="logo-symbol">✣</span>
        <span>XCELTECH</span>
      </div>

      {/* ================= PROFILE ================= */}
      <div className="profile">
        <div className="profile-image">
          👨
        </div>

        <div>
          <h3>Aman Admin</h3>
          <span>Admin</span>
        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <div className="sidebar-section">
        <p className="section-title">Features</p>

        {/* Dashboard */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `sidebar-item ${isActive ? "sidebar-active" : ""}`
          }
        >
          <FaThLarge className="sidebar-icon" />
          <span>Dashboard</span>
        </NavLink>

        {/* Messages - Text only, no notification */}
        <div className="sidebar-item">
          <FaEnvelope className="sidebar-icon" />
          <span>Messages</span>
        </div>
      </div>

      {/* ================= RECRUITMENT ================= */}
      <div className="sidebar-section">
        <p className="section-title">Recruitment</p>

        <div className="sidebar-item">
          <FaBriefcase className="sidebar-icon" />
          <span>Jobs</span>
        </div>

        <div className="sidebar-item">
          <FaUsers className="sidebar-icon" />
          <span>Candidates</span>
        </div>

        <div className="sidebar-item">
          <FaFileAlt className="sidebar-icon" />
          <span>Resumes</span>
        </div>
      </div>

      {/* ================= ORGANIZATION ================= */}
      <div className="sidebar-section">
        <p className="section-title">Organization</p>

        {/* Employee Management */}
        <NavLink
          to="/employee-management"
          className={({ isActive }) =>
            `sidebar-item ${isActive ? "sidebar-active" : ""}`
          }
        >
          <FaUser className="sidebar-icon" />
          <span>Employee Management</span>
        </NavLink>

        {/* Leave Management */}
        <NavLink
          to="/leave-management"
          className={({ isActive }) =>
            `sidebar-item ${isActive ? "sidebar-active" : ""}`
          }
        >
          <FaBookOpen className="sidebar-icon" />
          <span>Leave Management</span>
        </NavLink>

        {/* Performance Management */}
        <div className="sidebar-item">
          <FaBalanceScale className="sidebar-icon" />
          <span>Performance Management</span>
        </div>
      </div>

      {/* ================= KPS PAY ================= */}
      <div className="sidebar-section">
        <p className="section-title">KPS Pay</p>

        <div className="sidebar-item">
          <FaMoneyBillWave className="sidebar-icon" />
          <span>Payroll Management</span>
        </div>
      </div>

      {/* ================= LOGOUT ================= */}
      <button className="logout-button">
        <FaPowerOff />
        <span>Log Out</span>
      </button>

      {/* ================= BOTTOM PATTERN ================= */}
      <div className="sidebar-bottom-pattern">
        <span>◆</span>
        <span>◆</span>
        <span>●</span>
        <span>●</span>
      </div>

    </aside>
  );
}

export default Sidebar;