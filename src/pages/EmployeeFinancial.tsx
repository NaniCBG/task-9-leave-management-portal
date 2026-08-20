import { useNavigate, useParams } from "react-router-dom";
import EmployeeProfileSidebar from "../components/EmployeeProfileSidebar";
import { employees } from "../data/employees";

function EmployeeFinancial() {
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

          <h3>Financial Details</h3>

          <div className="financial-content">

            <label>Bank Name</label>

            <div className="detail-box">
              {employee.bankName}
            </div>

            <div className="financial-two-column">

              <div>
                <label>Account No</label>

                <div className="detail-box">
                  {employee.accountNumber}
                </div>
              </div>

              <div>
                <label>Account Name</label>

                <div className="detail-box">
                  {employee.accountName}
                </div>
              </div>

            </div>

            <button className="update-account-button">
              Update Account Details
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EmployeeFinancial;