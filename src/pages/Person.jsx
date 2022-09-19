import {
  AccessibilityOutline,
  AlbumsOutline,
  ExtensionPuzzleOutline,
  PlayOutline,
  SunnyOutline
} from "react-ionicons";
import {Link, useParams} from "react-router-dom";
import Tippy from "@tippyjs/react";
import people from "../data/people";
import Avatar from "../components/Avatar";
import projects from "../data/projects";

export default function Person() {
  let { username } = useParams();
  const person = people.find(p => p.username === username);

  return (
    <div className="jenkins-body">
      <div className="jenkins-app-bar">
        <div className={"jenkins-app-bar__content"}>
          <h1 className={"jenkins-project-heading"}>
            <Avatar person={person} size={"3.6rem"} animated={true} />
            { person.name }
          </h1>
        </div>
        <div className={"jenkins-app-bar__controls"}>
          <Link to={"/"} className={"jenkins-button"}>
            Configure
          </Link>
        </div>
      </div>
      <div className={"person-profile"}>
        <div className={"user-card"}>
          <a className="jenkins-sidebar__item jenkins-sidebar__item--selected">
            <div className="jenkins-sidebar__item__icon">
              <AlbumsOutline />
            </div>
            Available plugins
          </a>
          <a className="jenkins-sidebar__item">
            <div className="jenkins-sidebar__item__icon">
              <AccessibilityOutline />
            </div>
            Updates and installed plugins
          </a>
          <a className="jenkins-sidebar__item">
            <div className="jenkins-sidebar__item__icon">
              <ExtensionPuzzleOutline />
            </div>
            Advanced settings
          </a>
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
          {projects.map((item) => {
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
