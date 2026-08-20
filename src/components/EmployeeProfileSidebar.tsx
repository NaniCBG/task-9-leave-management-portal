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
          `profile-nav-button ${
            isActive ? "profile-nav-active" : ""
          }`
        }
      >
        Personal Details
      </NavLink>

      <NavLink
        to={`/employee-management/${employeeId}/contact`}
        className={({ isActive }) =>
          `profile-nav-button ${
            isActive ? "profile-nav-active" : ""
          }`
        }
      >
        Contact Details
      </NavLink>

      <NavLink
        to={`/employee-management/${employeeId}/next-of-kin`}
        className={({ isActive }) =>
          `profile-nav-button ${
            isActive ? "profile-nav-active" : ""
          }`
        }
      >
        Next of Kin Details
      </NavLink>

      <NavLink
        to={`/employee-management/${employeeId}/education`}
        className={({ isActive }) =>
          `profile-nav-button ${
            isActive ? "profile-nav-active" : ""
          }`
        }
      >
        Education Qualifications
      </NavLink>

      <NavLink
        to={`/employee-management/${employeeId}/guarantor`}
        className={({ isActive }) =>
          `profile-nav-button ${
            isActive ? "profile-nav-active" : ""
          }`
        }
      >
        Guarantor Details
      </NavLink>

      <NavLink
        to={`/employee-management/${employeeId}/family`}
        className={({ isActive }) =>
          `profile-nav-button ${
            isActive ? "profile-nav-active" : ""
          }`
        }
      >
        Family Details
      </NavLink>

      <NavLink
        to={`/employee-management/${employeeId}/job`}
        className={({ isActive }) =>
          `profile-nav-button ${
            isActive ? "profile-nav-active" : ""
          }`
        }
      >
        Job Details
      </NavLink>

      <NavLink
        to={`/employee-management/${employeeId}/financial`}
        className={({ isActive }) =>
          `profile-nav-button ${
            isActive ? "profile-nav-active" : ""
          }`
        }
      >
        Financial Details
      </NavLink>

    </div>
  );
}

export default EmployeeProfileSidebar;