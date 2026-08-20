import { useNavigate, useParams } from "react-router-dom";
import EmployeeProfileSidebar from "../components/EmployeeProfileSidebar";
import { employees } from "../data/employees";

function EmployeeNextOfKin() {
  const { employeeId } = useParams();
  const navigate = useNavigate();

  const employee = employees.find(
    (item) => String(item.id) === employeeId
  );

  if (!employee) {
    return <h2>Employee not found</h2>;
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
        Employee Mgmt / Employee Profile / Next of Kin Details
      </div>

      <div className="employee-profile-layout">

        <EmployeeProfileSidebar
          employeeId={String(employee.id)}
        />

        <div className="employee-profile-content">

          <div className="details-card">

            <h3>Next of Kin Details</h3>

            <div className="details-grid">

              <div>
                <label>Name</label>
                <div className="detail-box">
                  {employee.nextOfKinName}
                </div>
              </div>

              <div>
                <label>Relationship</label>
                <div className="detail-box">
                  {employee.nextOfKinRelationship}
                </div>
              </div>

              <div>
                <label>Phone Number</label>
                <div className="detail-box">
                  {employee.nextOfKinPhone}
                </div>
              </div>

              <div>
                <label>Address</label>
                <div className="detail-box">
                  {employee.nextOfKinAddress}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EmployeeNextOfKin;