import { useNavigate, useParams } from "react-router-dom";
import EmployeeProfileSidebar from "../components/EmployeeProfileSidebar";
import { employees } from "../data/employees";

function EmployeePersonalDetails() {
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

      {/* Back Button */}
      <button
        className="back-button"
        onClick={() => navigate("/employee-management")}
      >
        ← Back
      </button>

      {/* Breadcrumb */}
      <div className="employee-breadcrumb">
        Employee Mgmt / Employee Profile /{" "}
        {employee.employeeName}
      </div>

      <div className="employee-profile-layout">

        {/* Profile Navigation */}
        <EmployeeProfileSidebar
          employeeId={employeeId!}
        />

        {/* Personal Details */}
        <div className="details-card">

          <h3>Personal Details</h3>

          <div className="details-grid">

            {/* Employee Name */}
            <div>
              <label>Employee Name</label>

              <div className="detail-box">
                {employee.employeeName}
              </div>
            </div>

            {/* Employee ID */}
            <div>
              <label>Employee ID</label>

              <div className="detail-box">
                {employee.employeeId}
              </div>
            </div>

            {/* Nationality */}
            <div>
              <label>Nationality</label>

              <div className="detail-box">
                {employee.nationality}
              </div>
            </div>

            {/* Date of Birth */}
            <div>
              <label>Date of Birth</label>

              <div className="detail-box">
                {employee.dateOfBirth}
              </div>
            </div>

            {/* Marital Status */}
            <div>
              <label>Marital Status</label>

              <div className="detail-box">
                {employee.maritalStatus}
              </div>
            </div>

            {/* Gender */}
            <div>
              <label>Gender</label>

              <div className="detail-box">
                {employee.gender}
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EmployeePersonalDetails;