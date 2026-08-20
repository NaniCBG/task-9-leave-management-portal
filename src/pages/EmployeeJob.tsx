import { useNavigate, useParams } from "react-router-dom";
import EmployeeProfileSidebar from "../components/EmployeeProfileSidebar";
import { employees } from "../data/employees";

function EmployeeJob() {
  const { employeeId } = useParams();
  const navigate = useNavigate();

  const employee = employees.find(
    (item) => item.id === Number(employeeId)
  );

  if (!employee) {
    return <div>Employee not found</div>;
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
        Employee Mgmt / Employee Profile / {employee.employeeName}
      </div>

      <div className="employee-profile-layout">

        <EmployeeProfileSidebar employeeId={employeeId!} />

        <div className="details-card job-details-card">

          <h3>View Job Details</h3>

          <div className="job-role">
            <label>Job Role</label>

            <h2>
              {employee.jobRole}
            </h2>
          </div>

          <div className="job-department">
            <label>Department</label>

            <h3>
              {employee.department}
            </h3>
          </div>

          <div className="job-description">

            <h3>Job Description</h3>

            <p>
              Your responsibilities will include:
            </p>

            <ul>
              {employee.jobDescription.map(
                (description, index) => (
                  <li key={index}>
                    {description}
                  </li>
                )
              )}
            </ul>

            <button className="document-button">
              View Documents
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EmployeeJob;