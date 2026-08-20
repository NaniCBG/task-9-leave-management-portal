import { FaFilter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { employees } from "../data/employees";

function EmployeeManagement() {
  const navigate = useNavigate();

  return (
    <div className="employee-page">

      {/* Breadcrumb */}
      <div className="employee-breadcrumb">
        Dashboard / Employee Management
      </div>

      <div className="employee-card">

        {/* Heading */}
        <div className="employee-heading">

          <h3>
            Employee Management
          </h3>

          <div className="employee-actions">

            <FaFilter className="employee-filter" />

            <button className="employee-export">
              Export
              <span>●</span>
            </button>

          </div>

        </div>

        {/* Employee Table */}
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

                  <td>
                    <button
                      className="employee-action-button"
                      onClick={() =>
                        navigate(
                          `/employee-management/${employee.id}/profile`
                        )
                      }
                    >
                      Actions
                      <span>●</span>
                    </button>
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