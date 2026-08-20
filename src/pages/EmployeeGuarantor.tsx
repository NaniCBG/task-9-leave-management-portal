import { useNavigate, useParams } from "react-router-dom";
import EmployeeProfileSidebar from "../components/EmployeeProfileSidebar";
import { employees } from "../data/employees";

function EmployeeGuarantor() {
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

        <div className="details-card">

          <h3>Guarantor Details</h3>

          <div className="guarantor-list">

            {employee.guarantors.map((guarantor, index) => (
              <div
                className="detail-box"
                key={index}
              >
                {guarantor}
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default EmployeeGuarantor;