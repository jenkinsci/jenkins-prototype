import {PlayOutline, SearchOutline, SunnyOutline} from "react-ionicons";
import { faker } from '@faker-js/faker';
import {Link} from "react-router-dom";
import Tippy from "@tippyjs/react";
import Green from "../green.svg";
import Sun from "../sun.svg";

export default function Person() {
  const colors = [
    "orange",
    "red", "green", "blue", "pink", "brown", "cyan", "indigo", "yellow", "purple"
  ]

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

  function randomAngle() {
    return Math.random() * 360;
  }

  function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div className="jenkins-body">
      <div className="jenkins-app-bar">
        <div className={"jenkins-app-bar__content"}>
          <h1>
            Jan Faracik
          </h1>
        </div>
        <div className={"jenkins-app-bar__controls"}>
          <Link to={"/"} className={"jenkins-button"}>
            Configure
          </Link>
        </div>
      </div>
      <div className={"person-profile"}>
        <div className={"user-card"} style={{"background": `linear-gradient(${randomAngle()}deg, var(--${randomColor()}), var(--${randomColor()}))`}}>

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
          {items.map((item) => {
            return (
              <tr key={item.name}>
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
      </div>
    </div>
  );
}
