function Welcome() {
  return (
    <div className="welcome-page">

      <div className="welcome-card">

        <h1>Leave Management Portal</h1>

        <p>
          Welcome to the Leave Management Portal.
        </p>

        <p>
          This portal is used to manage employee leave plans,
          ongoing leave applications, leave history and relief officers.
        </p>

        <div className="welcome-info">

          <h2>Leave Management</h2>

          <p>
            Use the Leave Management section to access the available
            leave management pages.
          </p>

          <p className="direction-text">
            Please click <strong>Leave Management</strong> from the
            sidebar to continue.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Welcome;