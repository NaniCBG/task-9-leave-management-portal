import { useNavigate, useParams } from "react-router-dom";
import EmployeeProfileSidebar from "../components/EmployeeProfileSidebar";
import { employees } from "../data/employees";

function EmployeeEducation() {
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
        onClick={() => navigate("/employee-management")}
      >
        ← Back
      </button>

      <div className="employee-breadcrumb">
        Employee Mgmt / Employee Profile / {employee.employeeName}
      </div>

      <div className="employee-profile-layout">

        <EmployeeProfileSidebar employeeId={employeeId!} />

        <div className="details-card">

          <h3>
            Academic Records / Academic Details
          </h3>

          <div className="details-grid">

            <div>
              <label>Name of Institution</label>
              <div className="detail-box">
                {employee.institution}
              </div>
            </div>

            <div>
              <label>Department</label>
              <div className="detail-box">
                {employee.educationDepartment}
              </div>
            </div>

            <div>
              <label>Course</label>
              <div className="detail-box">
                {employee.course}
              </div>
            </div>

            <div>
              <label>Location</label>
              <div className="detail-box">
                {employee.educationLocation}
              </div>
            </div>

            <div>
              <label>Start Date</label>
              <div className="detail-box">
                {employee.educationStartDate}
              </div>
            </div>

            <div>
              <label>End Date</label>
              <div className="detail-box">
                {employee.educationEndDate}
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EmployeeEducation;