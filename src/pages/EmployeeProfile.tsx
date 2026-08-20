import { useNavigate, useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

import EmployeeProfileSidebar from "../components/EmployeeProfileSidebar";
import { employees } from "../data/employees";

function EmployeeProfile() {
  const { employeeId } = useParams();
  const navigate = useNavigate();

  const employee = employees.find(
    (item) => String(item.id) === employeeId
  );

  if (!employee) {
    return (
      <div className="employee-profile-page">

        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <h2>Employee not found</h2>

      </div>
    );
  }

  return (
    <div className="employee-profile-page">

      <button
        className="back-button"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="employee-breadcrumb">
        Employee Mgmt / Employee Profile / {employee.name}
      </div>

      <div className="employee-profile-layout">

        <EmployeeProfileSidebar
          employeeId={String(employee.id)}
        />

        <div className="employee-profile-content">

          <div className="personal-profile-card">

            <div className="edit-area">
              <FaEdit />
              <span>Edit</span>
            </div>

            <div className="employee-avatar">
              👨
            </div>

            <p className="profile-label">
              Employee Name
            </p>

            <h2>
              {employee.name}
            </h2>

            <p className="profile-label">
              Department
            </p>

            <h3>
              {employee.department}
            </h3>

            <div className="profile-job-row">

              <div>
                <p className="profile-label">
                  Job Title
                </p>

                <h3>
                  {employee.jobTitle}
                </h3>
              </div>

              <div>
                <p className="profile-label">
                  Job Category
                </p>

                <h3>
                  {employee.category}
                </h3>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EmployeeProfile;