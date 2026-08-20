import { useNavigate, useParams } from "react-router-dom";
import EmployeeProfileSidebar from "../components/EmployeeProfileSidebar";
import { employees } from "../data/employees";

function EmployeeContactDetails() {
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
        Employee Mgmt / Employee Profile / Contact Details
      </div>

      <div className="employee-profile-layout">

        <EmployeeProfileSidebar
          employeeId={String(employee.id)}
        />

        <div className="employee-profile-content">

          <div className="details-card">

            <h3>Contact Details</h3>

            <div className="details-grid">

              <div>
                <label>Phone Number 1</label>
                <div className="detail-box">
                  {employee.phoneNumber1}
                </div>
              </div>

              <div>
                <label>Phone Number 2</label>
                <div className="detail-box">
                  {employee.phoneNumber2}
                </div>
              </div>

              <div>
                <label>Email</label>
                <div className="detail-box">
                  {employee.email}
                </div>
              </div>

              <div>
                <label>City of Residence</label>
                <div className="detail-box">
                  {employee.cityOfResidence}
                </div>
              </div>

              <div>
                <label>Residential Address</label>
                <div className="detail-box">
                  {employee.residentialAddress}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EmployeeContactDetails;