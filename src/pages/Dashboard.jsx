import Sun from "../sun.svg";
import Green from "../green.svg";
import {Link} from "react-router-dom";
import Tippy from "@tippyjs/react";
import {
  AddOutline, FingerPrintOutline, LogoRss, PlayOutline, ScanCircleOutline, SunnyOutline
} from "react-ionicons";
import Overflow from "../components/Overflow";

function Dashboard() {

  const items = [
    {
      state: Green,
      weather: Sun,
      name: "Jenkins",
      lastSuccess: "16 hours ago",
      lastFailure: "One day ago",
      lastDuration: "30 seconds"
    }
  ]

  for (let i = 0; i < 30; i++) {
    items.push({
      state: Green,
      weather: Sun,
      name: "Jenkins",
      lastSuccess: "16 hours ago",
      lastFailure: "One day ago",
      lastDuration: "30 seconds"
    })
  }

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
          <Link to={"/new"} className={"jenkins-button"}>
            <AddOutline/>
            New project
          </Link>
          <Overflow>
            <a>
              <ScanCircleOutline />
              Project relationship
            </a>
            <a>
              <FingerPrintOutline />
              Check file fingerprint
            </a>
            <hr/>
            <a>
              <SunnyOutline />
              Icon legend
            </a>
            <a>
              <LogoRss />
              RSS
            </a>
          </Overflow>
        </div>
      </div>

      <div className="iamsidebar">
        <div className="sidebar-item jenkins-mobile-hide">
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
                  <div key={i} className={"jenkins-build-history__item"}>
                    <span className={"jenkins-passing-icon"}></span>
                    <Link to={"/project/build"} className={"jenkins-link"}>Build {374 - i}</Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <table className={"jenkins-table jenkins-mobile-hide"}>
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
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="jenkins-table-icon-host">
                    <Tippy content="This build passed">
                      <a className={"jenkins-button jenkins-button--transparent jenkins-button--icon jenkins-button--green"}>
                        <span className={"jenkins-passing-icon"}></span>
                      </a>
                    </Tippy>
                  </td>
                  <td className="jenkins-table-icon-host">
                    <Tippy content="Build stability: 5 out of the last 5 builds passed.">
                      <a className={"jenkins-button jenkins-button--transparent jenkins-button--icon jenkins-button--orange"}>
                        <SunnyOutline/>
                      </a>
                    </Tippy>
                  </td>
                  <td>
                    <Link className={"jenkins-link"} to={"/project"}>{item.name}</Link>
                  </td>
                  <td>{item.lastSuccess}</td>
                  <td>{item.lastFailure}</td>
                  <td>{item.lastDuration}</td>
                  <td className="jenkins-table-icon-host">
                    <a className={"jenkins-button jenkins-button--transparent jenkins-button--icon jenkins-button--green"}>
                      <PlayOutline/>
                    </a>
                  </td>
                </tr>
              )})}
          </tbody>
        </table>
        <div className={"jenkins-mobile-projects"}>
          {items.map((item, index) => {
            return (
              <Link key={index} to={"/project"} className={"jenkins-mobile-projects__item"}>
                <span className={"jenkins-passing-icon"}></span>
                <div>
                  <p className={"title"}>{item.name}</p>
                  <p>{item.lastSuccess} by Jan Faracik - Duration {item.lastDuration}</p>
                </div>
              </Link>
          )})}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
