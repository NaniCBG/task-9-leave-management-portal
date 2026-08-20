import { useNavigate, useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import EmployeeProfileSidebar from "../components/EmployeeProfileSidebar";
import { employees } from "../data/employees";

function EmployeeProfile() {
  const { employeeId } = useParams();
  const navigate = useNavigate();

  const employee = employees.find(
    (item) => item.id === Number(employeeId)
  );

  if (!employee) {
    return (
      <div>
        <h2>Employee not found</h2>

        <button
          className="back-button"
          onClick={() => navigate("/employee-management")}
        >
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div className="employee-profile-page">

      {/* BACK TO EMPLOYEE MANAGEMENT */}

      <button
        type="button"
        className="back-button"
        onClick={() => navigate("/employee-management")}
      >
        ← Back
      </button>


      {/* BREADCRUMB */}

      <div className="employee-breadcrumb">
        Employee Mgmt / Employee Profile / {employee.employeeName}
      </div>


      {/* PROFILE LAYOUT */}

      <div className="employee-profile-layout">

        <EmployeeProfileSidebar
          employeeId={employeeId!}
        />


        {/* PROFILE CONTENT */}

        <div className="employee-profile-content">

          <div className="personal-profile-card">

            {/* EDIT - DISPLAY ONLY */}

            <div className="edit-area">

              <FaEdit />

              <span>
                Edit
              </span>

            </div>


            {/* AVATAR */}

            <div className="employee-avatar">
              👨
            </div>


            {/* EMPLOYEE NAME */}

            <p className="profile-label">
              Employee Name
            </p>

            <h2>
              {employee.employeeName}
            </h2>


            {/* DEPARTMENT */}

            <p className="profile-label">
              Department
            </p>

            <h3>
              {employee.department}
            </h3>


            {/* JOB INFORMATION */}

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