import LeaveNavigation from "../components/LeaveNavigation";

function LeaveHistory() {
  return (
    <div className="leave-page">

      <h2 className="page-title">
        ▪ Leave Management
      </h2>

      <LeaveNavigation />

      <div className="table-card">

        <div className="history-heading">
          <h3>Leave History</h3>

          <div>
            <span className="filter-icon">⚑</span>
            <span className="export-text">Export</span>
          </div>
        </div>

        <table>

          <thead>
            <tr>
              <th>Name(s)</th>
              <th>Duration(s)</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Type</th>
              <th>Reason(s)</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>abebe gemechu</td>
              <td>5</td>
              <td>22/04/2022</td>
              <td>28/04/2022</td>
              <td>Sick</td>
              <td>Personal</td>
              <td>Actions</td>
            </tr>

            <tr>
              <td>aman bey</td>
              <td>7</td>
              <td>22/04/2022</td>
              <td>30/04/2022</td>
              <td>Exam</td>
              <td>Examination</td>
              <td>Actions</td>
            </tr>

            <tr>
              <td>feven Tesfaye</td>
              <td>120</td>
              <td>22/04/2022</td>
              <td>28/06/2022</td>
              <td>Maternity</td>
              <td>Child Care</td>
              <td>Actions</td>
            </tr>

            <tr>
              <td>gelila moges</td>
              <td>5</td>
              <td>22/04/2022</td>
              <td>28/04/2022</td>
              <td>Sick</td>
              <td>Personal</td>
              <td>Actions</td>
            </tr>

            <tr>
              <td>yanet tesfaye</td>
              <td>5</td>
              <td>22/04/2022</td>
              <td>28/04/2022</td>
              <td>Sick</td>
              <td>Personal</td>
              <td>Actions</td>
            </tr>

            <tr>
              <td>beti woloe</td>
              <td>5</td>
              <td>22/04/2022</td>
              <td>28/04/2022</td>
              <td>Sick</td>
              <td>Personal</td>
              <td>Actions</td>
            </tr>

            <tr>
              <td>dawit int</td>
              <td>5</td>
              <td>22/04/2022</td>
              <td>28/04/2022</td>
              <td>Sick</td>
              <td>Personal</td>
              <td>Actions</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default LeaveHistory;