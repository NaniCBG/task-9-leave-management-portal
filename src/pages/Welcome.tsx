function Welcome() {
  return (
    <div className="welcome-page">

      <div className="welcome-card">

        <h1>Welcome to XCELTECH</h1>

        <p>
          Welcome to the Management Portal.
        </p>

        <p>
          This portal provides access to different management
          sections of the organization.
        </p>

        {/* Leave Management */}
        <div className="welcome-info">

          <h2>Leave Management</h2>

          <p>
            The Leave Management section is used to manage employee
            leave plans, ongoing leave applications, leave history
            and relief officers.
          </p>

          <p className="direction-text">
            Please click <strong>Leave Management</strong> from the
            sidebar to access the leave management pages.
          </p>

        </div>

        {/* Employee Management */}
        <div className="welcome-info">

          <h2>Employee Management</h2>

          <p>
            The Employee Management section is used to view employee
            information and access employee profile details.
          </p>

          <p className="direction-text">
            Please click <strong>Employee Management</strong> from the
            sidebar to access the employee management pages.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Welcome;