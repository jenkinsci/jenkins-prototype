import Tippy from "@tippyjs/react";
import tippyProps from "../data/tooltips";
import {Link} from "react-router-dom";
import {PlayOutline} from "react-ionicons";

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
                <div className={"jenkins-table-centerer jenkins-table-centerer--small"}>
                  <Tippy content="Build stability: 5 out of the last 5 builds passed." {...tippyProps}>
                    {item.weather}
                  </Tippy>
                </div>
              </td>
              <td width="30%">
                <Link className={"jenkins-link"} to={"/project"}>{item.name}</Link>
              </td>
              <td width="20%">
                {item.lastSuccess}
                <Link to={"/project/build/375"} className={"app-tag"}>#1337</Link>
              </td>
              <td width="20%">
                {item.lastFailure}
                <Link to={"/project/build/375"} className={"app-tag"}>#1336</Link>
              </td>
              <td width="15%">{item.lastDuration}</td>
              <td className="jenkins-table-icon-host">
                <PlayOutline color={"var(--green)"} />
              </td>
            </tr>
          )})}
        </tbody>
      </table>
      <div className={"jenkins-mobile-projects"}>
        {projects.map((item, index) => {
          return (
            <Link key={index} to={"/project"} className={"jenkins-mobile-projects__item"}>
              {item.state}
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
