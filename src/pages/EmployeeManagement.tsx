import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFilter, FaChevronDown } from "react-icons/fa";
import { employees } from "../data/employees";

function EmployeeManagement() {
  const navigate = useNavigate();

  // Stores which employee's dropdown is open
  const [openActionId, setOpenActionId] = useState<number | null>(null);

  const handleActionClick = (employeeId: number) => {
    setOpenActionId((currentId) =>
      currentId === employeeId ? null : employeeId
    );
  };

  const handleViewProfile = (employeeId: number) => {
    setOpenActionId(null);

    navigate(`/employee-management/${employeeId}/profile`);
  };

  return (
    <div className="employee-page">

      {/* Breadcrumb */}
      <div className="employee-breadcrumb">
        Dashboard / Employee Management
      </div>

      {/* Page Header */}
      <div className="employee-heading">

        <h1>Employee Management</h1>

        <div className="employee-actions">

          <FaFilter className="employee-filter" />

          <button
            type="button"
            className="employee-export"
          >
            Export ↓
          </button>

        </div>

      </div>

      {/* Employee Table */}
      <div className="employee-card">

        <div className="employee-table-wrapper">

          <table className="employee-table">

            <thead>
              <tr>
                <th>Name(s)</th>
                <th>Dept</th>
                <th>Job Title</th>
                <th>Start Date</th>
                <th>Category</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {employees.map((employee) => (

                <tr key={employee.id}>

                  <td>{employee.name}</td>

                  <td>{employee.department}</td>

                  <td>{employee.jobTitle}</td>

                  <td>{employee.startDate}</td>

                  <td>{employee.category}</td>

                  <td>{employee.gender}</td>

                  <td className="action-cell">

                    {/* Action Menu Wrapper */}
                    <div className="action-menu-wrapper">

                      {/* Action Button */}
                      <button
                        type="button"
                        className="employee-action-button"
                        onClick={() =>
                          handleActionClick(employee.id)
                        }
                      >
                        <span>Actions</span>

                        <FaChevronDown
                          className={
                            openActionId === employee.id
                              ? "action-arrow-up"
                              : ""
                          }
                        />
                      </button>

                      {/* Dropdown */}
                      {openActionId === employee.id && (

                        <div className="action-dropdown">

                          {/* View Profile - WORKING */}
                          <button
                            type="button"
                            onClick={() =>
                              handleViewProfile(employee.id)
                            }
                          >
                            View Profile
                          </button>

                          {/* Edit Profile - NOT WORKING */}
                          <button
                            type="button"
                            className="edit-profile-disabled"
                          >
                            Edit Profile
                          </button>

                        </div>

                      )}

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default EmployeeManagement;