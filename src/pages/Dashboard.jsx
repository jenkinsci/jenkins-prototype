import Sun from "../sun.svg";
import Cloud from "../cloud.svg";
import Green from "../green.svg";
import {Link} from "react-router-dom";
import Tippy from "@tippyjs/react";
import {AddOutline, EllipsisHorizontalOutline, PlayOutline} from "react-ionicons";

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
        <div className={"jenkins-app-bar__content"}>
          <h1>Dashboard</h1>
        </div>
        <div className={"jenkins-app-bar__controls"}>
          <a className={"jenkins-button"}>
            <AddOutline/>
            New item
          </a>
          <a className={"jenkins-button"}>
            <AddOutline/>
            New view
          </a>
          <a className={"jenkins-button jenkins-button--icon"}>
            <EllipsisHorizontalOutline/>
          </a>
        </div>
      </div>
      <div className={"jenkins-tabs"}>
        <a className={"jenkins-tabs__tab--selected"}>All</a>
        <a>Build monitor</a>
        <a>Trunk</a>
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
              <th className="jenkins-table-icon-host"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr key={item.name}>
                  <td className="jenkins-table-icon-host">
                    <Tippy content="This build passed">
                      <div className="jenkins-table-icon">
                        <img src={item.state}/>
                      </div>
                    </Tippy>
                  </td>
                  <td className="jenkins-table-icon-host">
                    <Tippy content="Build stability: 5 out of the last 5 builds passed.">
                      <div className="jenkins-table-icon">
                        <img src={item.weather}/>
                      </div>
                    </Tippy>
                  </td>
                  <td>
                    <Link className={"jenkins-link"} to={"/project"}>{item.name}</Link>
                  </td>
                  <td>{item.lastSuccess}</td>
                  <td>{item.lastFailure}</td>
                  <td>{item.lastDuration}</td>
                  <td className="jenkins-table-icon-host">
                    <a className={"jenkins-button jenkins-button--icon jenkins-button--green"}>
                      <PlayOutline/>
                    </a>
                  </td>
                </tr>
              )})}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
