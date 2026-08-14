import LeaveNavigation from "../components/LeaveNavigation";

function LeaveRecall() {
  return (
    <div className="leave-page">

      <h2 className="page-title">
        ▪ Leave Management
      </h2>

      <LeaveNavigation />

      <div className="table-card">

        <h3>Ongoing Leave Applications</h3>

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
              <td>aman bey</td>
              <td>5</td>
              <td>22/04/2022</td>
              <td>28/04/2022</td>
              <td>Casual</td>
              <td>Personal</td>
              <td><span className="recall-text">Recall</span></td>
            </tr>

            <tr>
              <td>Abebe kebede</td>
              <td>7</td>
              <td>22/04/2022</td>
              <td>30/04/2022</td>
              <td>Casual</td>
              <td>Personal</td>
              <td><span className="recall-text">Recall</span></td>
            </tr>

            <tr>
              <td>daniel</td>
              <td>7</td>
              <td>22/04/2022</td>
              <td>28/06/2022</td>
              <td>Casual</td>
              <td>Personal</td>
              <td><span className="recall-text">Recall</span></td>
            </tr>

            <tr>
              <td>feven tesfaye</td>
              <td>5</td>
              <td>22/04/2022</td>
              <td>28/04/2022</td>
              <td>Casual</td>
              <td>Personal</td>
              <td><span className="recall-text">Recall</span></td>
            </tr>

            <tr>
              <td>tedla atalay</td>
              <td>5</td>
              <td>22/04/2022</td>
              <td>28/04/2022</td>
              <td>Casual</td>
              <td>Personal</td>
              <td><span className="recall-text">Recall</span></td>
            </tr>

            <tr>
              <td>gelila moges</td>
              <td>5</td>
              <td>22/04/2022</td>
              <td>28/04/2022</td>
              <td>Casual</td>
              <td>Personal</td>
              <td><span className="recall-text">Recall</span></td>
            </tr>

            <tr>
              <td>redwan husein</td>
              <td>5</td>
              <td>22/04/2022</td>
              <td>28/04/2022</td>
              <td>Casual</td>
              <td>Personal</td>
              <td><span className="recall-text">Recall</span></td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default LeaveRecall;