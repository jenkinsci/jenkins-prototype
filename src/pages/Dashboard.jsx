import Sun from "../sun.svg";
import Cloud from "../cloud.svg";
import Green from "../green.svg";
import {Link} from "react-router-dom";

function Dashboard() {

  const items = [
    {
      state: Green,
      weather: Sun,
      name: "Scalemate",
      lastSuccess: "16 hours ago",
      lastFailure: "One day ago",
      lastDuration: "30 seconds"
    },
    {
      state: Green,
      weather: Cloud,
      name: "Paleta",
      lastSuccess: "10 hours ago",
      lastFailure: "Two days ago",
      lastDuration: "1 minute and 15 seconds"
    },
    {
      state: Green,
      weather: Sun,
      name: "Scalemate",
      lastSuccess: "16 hours ago",
      lastFailure: "One day ago",
      lastDuration: "30 seconds"
    },
    {
      state: Green,
      weather: Cloud,
      name: "Paleta",
      lastSuccess: "10 hours ago",
      lastFailure: "Two days ago",
      lastDuration: "1 minute and 15 seconds"
    },
    {
      state: Green,
      weather: Sun,
      name: "Scalemate",
      lastSuccess: "16 hours ago",
      lastFailure: "One day ago",
      lastDuration: "30 seconds"
    },
    {
      state: Green,
      weather: Cloud,
      name: "Paleta",
      lastSuccess: "10 hours ago",
      lastFailure: "Two days ago",
      lastDuration: "1 minute and 15 seconds"
    },
    {
      state: Green,
      weather: Sun,
      name: "Scalemate",
      lastSuccess: "16 hours ago",
      lastFailure: "One day ago",
      lastDuration: "30 seconds"
    },
    {
      state: Green,
      weather: Cloud,
      name: "Paleta",
      lastSuccess: "10 hours ago",
      lastFailure: "Two days ago",
      lastDuration: "1 minute and 15 seconds"
    },
    {
      state: Green,
      weather: Sun,
      name: "Scalemate",
      lastSuccess: "16 hours ago",
      lastFailure: "One day ago",
      lastDuration: "30 seconds"
    },
    {
      state: Green,
      weather: Cloud,
      name: "Paleta",
      lastSuccess: "10 hours ago",
      lastFailure: "Two days ago",
      lastDuration: "1 minute and 15 seconds"
    },
    {
      state: Green,
      weather: Sun,
      name: "Scalemate",
      lastSuccess: "16 hours ago",
      lastFailure: "One day ago",
      lastDuration: "30 seconds"
    },
    {
      state: Green,
      weather: Cloud,
      name: "Paleta",
      lastSuccess: "10 hours ago",
      lastFailure: "Two days ago",
      lastDuration: "1 minute and 15 seconds"
    },
    {
      state: Green,
      weather: Sun,
      name: "Scalemate",
      lastSuccess: "16 hours ago",
      lastFailure: "One day ago",
      lastDuration: "30 seconds"
    },
    {
      state: Green,
      weather: Cloud,
      name: "Paleta",
      lastSuccess: "10 hours ago",
      lastFailure: "Two days ago",
      lastDuration: "1 minute and 15 seconds"
    },
    {
      state: Green,
      weather: Sun,
      name: "Scalemate",
      lastSuccess: "16 hours ago",
      lastFailure: "One day ago",
      lastDuration: "30 seconds"
    },
    {
      state: Green,
      weather: Cloud,
      name: "Paleta",
      lastSuccess: "10 hours ago",
      lastFailure: "Two days ago",
      lastDuration: "1 minute and 15 seconds"
    },
    {
      state: Green,
      weather: Sun,
      name: "Scalemate",
      lastSuccess: "16 hours ago",
      lastFailure: "One day ago",
      lastDuration: "30 seconds"
    },
    {
      state: Green,
      weather: Cloud,
      name: "Paleta",
      lastSuccess: "10 hours ago",
      lastFailure: "Two days ago",
      lastDuration: "1 minute and 15 seconds"
    },
    {
      state: Green,
      weather: Sun,
      name: "Scalemate",
      lastSuccess: "16 hours ago",
      lastFailure: "One day ago",
      lastDuration: "30 seconds"
    },
    {
      state: Green,
      weather: Cloud,
      name: "Paleta",
      lastSuccess: "10 hours ago",
      lastFailure: "Two days ago",
      lastDuration: "1 minute and 15 seconds"
    },
  ]

  return (
    <div className="jenkins-body">
      <div className="jenkins-app-bar">
        <h1>Dashboard</h1>
        <div>
          <a className={"jenkins-button jenkins-button--primary"}>New item</a>
          <a className={"jenkins-button"}>New view</a>
        </div>
      </div>
      <div>
        <table className={"jenkins-table"}>
          <thead>
            <tr>
              <th className="jenkins-table-icon-host">S</th>
              <th className="jenkins-table-icon-host">W</th>
              <th>Name</th>
              <th>Last success</th>
              <th>Last failure</th>
              <th>Last duration</th>
              <th>Run</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr key={item.name}>
                  <td className="jenkins-table-icon-host">
                    <div className="jenkins-table-icon">
                      <img src={item.state}/>
                    </div>
                  </td>
                  <td className="jenkins-table-icon-host">
                    <div className="jenkins-table-icon">
                      <img src={item.weather}/>
                    </div>
                  </td>
                  <td>
                    <Link className={"jenkins-link"} to={"/project"}>{item.name}</Link>
                  </td>
                  <td>{item.lastSuccess}</td>
                  <td>{item.lastFailure}</td>
                  <td>{item.lastDuration}</td>
                  <td>Run</td>
                </tr>
              )})}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
