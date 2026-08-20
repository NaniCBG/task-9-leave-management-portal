import { NavLink } from "react-router-dom";

interface EmployeeProfileSidebarProps {
  employeeId: string;
}

function EmployeeProfileSidebar({
  employeeId,
}: EmployeeProfileSidebarProps) {
  return (
    <div className="employee-profile-sidebar">

      <NavLink
        to={`/employee-management/${employeeId}/personal`}
        className={({ isActive }) =>
          `profile-sidebar-button ${
            isActive ? "profile-sidebar-active" : ""
          }`
        }
      >
        Personal Details
      </NavLink>

      <NavLink
        to={`/employee-management/${employeeId}/contact`}
        className={({ isActive }) =>
          `profile-sidebar-button ${
            isActive ? "profile-sidebar-active" : ""
          }`
        }
      >
        Contact Details
      </NavLink>

      <NavLink
        to={`/employee-management/${employeeId}/next-of-kin`}
        className={({ isActive }) =>
          `profile-sidebar-button ${
            isActive ? "profile-sidebar-active" : ""
          }`
        }
      >
        Next of Kin Details
      </NavLink>

      <NavLink
        to={`/employee-management/${employeeId}/education`}
        className={({ isActive }) =>
          `profile-sidebar-button ${
            isActive ? "profile-sidebar-active" : ""
          }`
        }
      >
        Education Qualifications
      </NavLink>

      <NavLink
        to={`/employee-management/${employeeId}/guarantor`}
        className={({ isActive }) =>
          `profile-sidebar-button ${
            isActive ? "profile-sidebar-active" : ""
          }`
        }
      >
        Guarantor Details
      </NavLink>

      <NavLink
        to={`/employee-management/${employeeId}/family`}
        className={({ isActive }) =>
          `profile-sidebar-button ${
            isActive ? "profile-sidebar-active" : ""
          }`
        }
      >
        Family Details
      </NavLink>

      <NavLink
        to={`/employee-management/${employeeId}/job`}
        className={({ isActive }) =>
          `profile-sidebar-button ${
            isActive ? "profile-sidebar-active" : ""
          }`
        }
      >
        Job Details
      </NavLink>

      <NavLink
        to={`/employee-management/${employeeId}/financial`}
        className={({ isActive }) =>
          `profile-sidebar-button ${
            isActive ? "profile-sidebar-active" : ""
          }`
        }
      >
        Financial Details
      </NavLink>

    </div>
  );
}

export default EmployeeProfileSidebar;