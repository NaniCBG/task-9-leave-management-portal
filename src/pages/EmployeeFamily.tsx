import { useNavigate, useParams } from "react-router-dom";
import EmployeeProfileSidebar from "../components/EmployeeProfileSidebar";
import { employees } from "../data/employees";

function EmployeeFamily() {
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

          <h3>View Family Details</h3>

          <div className="family-list">

            {employee.familyMembers.map((member, index) => (
              <div
                className="family-item"
                key={index}
              >
                <strong>{member.name}</strong>

                <span>
                  {member.relationship}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default EmployeeFamily;