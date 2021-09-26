import {ReactComponent as Sun} from "../sun.svg";
import {ReactComponent as Cloud} from "../cloud.svg";
import TerminalText from "../terminal";
import {Link} from "react-router-dom";

function Dashboard() {

  const items = [
    {
      state: "",
      weather: <Sun/>,
      name: "Scalemate",
      lastSuccess: "16 hours ago",
      lastFailure: "One day ago",
      lastDuration: "30 seconds"
    },
    {
      state: "",
      weather: <Cloud/>,
      name: "Paleta",
      lastSuccess: "10 hours ago",
      lastFailure: "Two days ago",
      lastDuration: "1 minute and 15 seconds"
    }
  ]

  return (
    <div className="jenkins-body">
      <div className={"jenkins-breadcrumbs"}>
        <Link to={"/"} className={"jenkins-breadcrumb"}>Dashboard</Link>
        <Link to={"/project"} className={"jenkins-breadcrumb"}>Scalemate</Link>
      </div>
      <div className="jenkins-app-bar">
        <div className={"jenkins-app-bar__content"}>
          <h1>Build 374</h1>
        </div>
        <div>
          <a className={"jenkins-button jenkins-button--primary"}>Rebuild</a>
          <a className={"jenkins-button"}>Configure</a>
          <a className={"jenkins-button"}>...</a>
        </div>
      </div>
      <div className={"jenkins-build__layout"}>
        <div className={"jenkins-build__card"}>
          <div className="jenkins-build__card__title-float">
            <p className="jenkins-build__card__title">Terminal</p>
          </div>
          <code>
            {TerminalText}
          </code>
        </div>
        <div className={"jenkins-build__card"}><p className="jenkins-build__card__title">Stuff</p></div>
        <div className={"jenkins-build__card"}><p className="jenkins-build__card__title">Build parameters</p></div>
        <div className={"jenkins-build__card"}><p className="jenkins-build__card__title">Stuff</p></div>
        <div className={"jenkins-build__card"}><p className="jenkins-build__card__title">Stuff</p></div>
        <div className={"jenkins-build__card"}><p className="jenkins-build__card__title">Stuff</p></div>
        <div className={"jenkins-build__card"}><p className="jenkins-build__card__title">Stuff</p></div>
        <div className={"jenkins-build__card"}><p className="jenkins-build__card__title">Stuff</p></div>
      </div>
    </div>
  );
}

export default Dashboard;
