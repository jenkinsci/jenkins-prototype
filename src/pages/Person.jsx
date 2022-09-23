import {
  BrowsersOutline,
  FileTrayFullOutline
} from "react-ionicons";
import {Link, useParams} from "react-router-dom";
import people from "../data/people";
import Avatar from "../components/Avatar";
import projects from "../data/projects";
import BuildTable from "../components/BuildTable";

export default function Person() {
  let { username } = useParams();
  const person = people.find(p => p.username === username);

  return (
    <div className="jenkins-body jenkins-body--sidebar">
      <div className="jenkins-app-bar" style={{gridColumn: "span 2", "margin": "2rem 2rem 2rem 1.4rem"}}>
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
      <div className="jenkins-sidebar">
        <a className="jenkins-sidebar__item jenkins-sidebar__item--selected">
          <div className="jenkins-sidebar__item__icon">
            <FileTrayFullOutline />
          </div>
          Builds
        </a>
        <a className="jenkins-sidebar__item">
          <div className="jenkins-sidebar__item__icon">
            <BrowsersOutline />
          </div>
          Views
        </a>
      </div>
      <div className="jenkins-body jenkins-body--inner">
        <BuildTable projects={projects} />
      </div>
    </div>
  );
}
