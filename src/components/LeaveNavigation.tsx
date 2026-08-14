import { NavLink } from "react-router-dom";

function LeaveNavigation() {
  return (
    <div className="leave-navigation">

      <NavLink
        to="/leave-management/settings"
        className={({ isActive }) =>
          `leave-button ${isActive ? "leave-active" : ""}`
        }
      >
        Leave Settings
      </NavLink>

      <NavLink
        to="/leave-management/recall"
        className={({ isActive }) =>
          `leave-button ${isActive ? "leave-active" : ""}`
        }
      >
        Leave Recall
      </NavLink>

      <NavLink
        to="/leave-management/history"
        className={({ isActive }) =>
          `leave-button ${isActive ? "leave-active" : ""}`
        }
      >
        Leave History
      </NavLink>

      <NavLink
        to="/leave-management/relief-officers"
        className={({ isActive }) =>
          `leave-button ${isActive ? "leave-active" : ""}`
        }
      >
        Relief Officers
      </NavLink>

    </div>
  );
}

export default LeaveNavigation;