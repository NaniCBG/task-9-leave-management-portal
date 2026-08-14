
import LeaveNavigation from "../components/LeaveNavigation";

function LeaveManagement() {
  return (
    <div className="leave-page">

      <h2 className="page-title">
        ▪ Leave Management
      </h2>

      <LeaveNavigation />

      <div className="leave-banner">

        <div>
          <h1>
            Manage ALL <span>Leave Applications</span>
          </h1>

          <p>
            A relaxed employee is a performing employee.
          </p>
        </div>

        <div className="banner-illustration">
          👩‍💼
        </div>

      </div>

    </div>
  );
}

export default LeaveManagement;