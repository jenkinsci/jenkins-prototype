import Sun from "../sun.svg";
import Cloud from "../cloud.svg";
import Green from "../green.svg";
import {Link} from "react-router-dom";
import Tippy from "@tippyjs/react";
import {
  AccessibilityOutline,
  AddOutline,
  AlbumsOutline,
  EllipsisHorizontalOutline, ExtensionPuzzleOutline,
  PlayOutline,
  SearchOutline
} from "react-ionicons";

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
          <div className="rotating-title">
            <p>Morning Jan</p>
            <p>Jenkins</p>
          </div>
          <h1>Dashboard</h1>
        </div>
        <div className={"jenkins-app-bar__controls"}>
          <a className={"jenkins-button"}>
            <AddOutline/>
            New item
          </a>
          <a className={"jenkins-button jenkins-button--icon"}>
            <EllipsisHorizontalOutline/>
          </a>
        </div>
      </div>
      <div class="iamsidebar">
        <div class="squalorVictoria">
          <div className="jenkins-sidebar">
            <h1 style={{"margin": "30px"}}>Dashboard</h1>
            <br/>
            <a className="jenkins-sidebar__item jenkins-sidebar__item--selected">
              <div className="jenkins-sidebar__item__icon">
                <AlbumsOutline />
              </div>
              System
            </a>
            <a className="jenkins-sidebar__item">
              <div className="jenkins-sidebar__item__icon">
                <AccessibilityOutline />
              </div>
              Tool configuration
            </a>
            <a className="jenkins-sidebar__item">
              <div className="jenkins-sidebar__item__icon">
                <ExtensionPuzzleOutline />
              </div>
              Plugins
            </a>
            <a className="jenkins-sidebar__item">
              <div className="jenkins-sidebar__item__icon">
                <AlbumsOutline />
              </div>
              Nodes and cloud
            </a>
            <h2 className="jenkins-sidebar__heading">Hello</h2>
            <a className="jenkins-sidebar__item">
              <div className="jenkins-sidebar__item__icon">
                <AccessibilityOutline />
              </div>
              Security
            </a>
            <a className={"jenkins-button"}>
              <AddOutline/>
              New view
            </a>
          </div>
        </div>
        <div class="sidebar-item">
          <div className={"jenkins-cards__item"}>
            <p className="jenkins-cards__item__title" style={{margin: 0, lineHeight: 1.66}}>
              This instance hosts several GitHub Organization folders organized by subject area.
              <br/>
              <br/>
              To add continuous integration and PR builds for a Jenkins plugin in the jenkinsci organization, just add a Jenkinsfile to your repository. You'll likely only need one line:
              <br/>
              <br/>
              buildPlugin()
            </p>
          </div>
          <div className={"jenkins-cards__item"}>
            <p className="jenkins-cards__item__title">Queue</p>
            <div className={"jenkins-build-history"}>
              <div className={"jenkins-build-history__item"}>
                <Link to={"/project/build"} className={"jenkins-link"}>part of Infra » acceptance-tests » install-lts-debian-package #43775</Link>
              </div>
            </div>
          </div>
          <div className={"jenkins-cards__item"}>
            <p className="jenkins-cards__item__title">Executors</p>
            <div className={"jenkins-build-history"}>
              {Array.from(Array(10), (e, i) => {
                return (
                  <div className={"jenkins-build-history__item"}>
                    <img src={Green}/>
                    <Link to={"/project/build"} className={"jenkins-link"}>Build {374 - i}</Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
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
