import Tippy from "@tippyjs/react";
import tippyProps from "../data/tooltips";
import {Link} from "react-router-dom";
import {PlayOutline} from "react-ionicons";
import PassingIcon from "./icons/PassingIcon";

export default function BuildTable({projects}) {
  return (
    <>
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
        {projects.map((item, index) => {
          return (
            <tr key={index}>
              <td className="jenkins-table-icon-host">
                <div className={"jenkins-table-centerer"} style={{marginLeft: "1rem"}}>
                  <Tippy content="This build passed"  {...tippyProps}>
                    {item.state}
                  </Tippy>
                </div>
              </td>
              <td className="jenkins-table-icon-host">
                <div className={"jenkins-table-centerer"}>
                  <Tippy content="Build stability: 5 out of the last 5 builds passed." {...tippyProps}>
                    <a className={"jenkins-button jenkins-button--transparent jenkins-button--icon jenkins-button--orange"}>
                      {item.weather}
                    </a>
                  </Tippy>
                </div>
              </td>
              <td width="20%">
                <Link className={"jenkins-link"} to={"/project"}>{item.name}</Link>
              </td>
              <td width="20%">
                {item.lastSuccess}
                <Link to={"/project/build"} className={"app-tag"}>#1337</Link>
              </td>
              <td width="20%">
                {item.lastFailure}
                <Link to={"/project/build"} className={"app-tag"}>#1336</Link>
              </td>
              <td width="20%">{item.lastDuration}</td>
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
        {projects.map((item, index) => {
          return (
            <Link key={index} to={"/project"} className={"jenkins-mobile-projects__item"}>
              <PassingIcon />
              <div>
                <p className={"title"}>{item.name}</p>
                <p>{item.lastSuccess} by Jan Faracik - Duration {item.lastDuration}</p>
              </div>
            </Link>
          )})}
      </div>
    </>
  )
}
