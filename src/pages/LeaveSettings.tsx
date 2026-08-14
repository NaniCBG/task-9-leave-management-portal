import LeaveNavigation from "../components/LeaveNavigation";

function LeaveSettings() {
  return (
    <div className="leave-page">

      <h2 className="page-title">
        ▪ Leave Management
      </h2>

      <LeaveNavigation />

      <div className="settings-grid">

        <div className="settings-card">

          <h3>Create Leave Settings</h3>

          <div className="form-row">
            <label>Leave Plan Name</label>
            <div className="fake-input">Maternity</div>
          </div>

          <div className="form-row">
            <label>Duration (days)</label>
            <div className="fake-input">60</div>
          </div>

          <div className="form-row">
            <label>
              Do you want to activate Leave Recall for this plan?
            </label>

            <div className="fake-input">
              Select option from dropdown
            </div>
          </div>

          <div className="two-column">

            <div>
              <label>Would you like to activate leave bonus</label>

              <div className="fake-input">
                Select option from dropdown
              </div>
            </div>

            <div>
              <label>
                How much percentage of leave bonus?
              </label>

              <div className="fake-input">
                Percentage (%)
              </div>
            </div>

          </div>

          <div className="form-row">
            <label>Select Leave Allocation</label>

            <div className="fake-input">
              Senior Level
            </div>
          </div>

          <div className="form-row">
            <label>Reason for Recall</label>

            <div className="textarea-box"></div>
          </div>

          <button className="create-button">
            Create
          </button>

        </div>

        <div className="settings-card">

          <h3>Manage Leave Settings</h3>

          <table>
            <thead>
              <tr>
                <th>Leave Plan</th>
                <th>Duration(s)</th>
                <th>Recall / Autorenew</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Maternity</td>
                <td>60</td>
                <td>No / No</td>
                <td>Actions</td>
              </tr>

              <tr>
                <td>Sick</td>
                <td>14</td>
                <td>No / Yes</td>
                <td>Actions</td>
              </tr>

              <tr>
                <td>Compassionate</td>
                <td>30</td>
                <td>No / No</td>
                <td>Actions</td>
              </tr>

              <tr>
                <td>Exam</td>
                <td>20</td>
                <td>No / No</td>
                <td>Actions</td>
              </tr>

              <tr>
                <td>Paternity</td>
                <td>60</td>
                <td>No / No</td>
                <td>Actions</td>
              </tr>

              <tr>
                <td>Casual</td>
                <td>10</td>
                <td>Yes / No</td>
                <td>Actions</td>
              </tr>

              <tr>
                <td>Exam</td>
                <td>20</td>
                <td>No / No</td>
                <td>Actions</td>
              </tr>

            </tbody>
          </table>

        </div>

      </div>

    </div>
  );
}

export default LeaveSettings;