import {ReactComponent as Sun} from "../sun.svg";
import {ReactComponent as Cloud} from "../cloud.svg";
import TerminalText from "../terminal";
import {Link} from "react-router-dom";
import {EllipsisHorizontalOutline, PlayOutline} from "react-ionicons";

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
        <div className={"jenkins-app-bar__controls"}>
          <a className={"jenkins-button jenkins-button--green"}>
            <PlayOutline/>
            Rebuild
          </a>
          <a className={"jenkins-button"}>Configure</a>
          <a className={"jenkins-button jenkins-button--icon"}>
            <EllipsisHorizontalOutline/>
          </a>
        </div>
      </div>
      <div className={"jenkins-cards"}>
        <div className={"jenkins-cards__item jenkins-cards__item--wide jenkins-build__terminal-card"}>
          <div className="jenkins-cards__item__title-float">
            <p className="jenkins-cards__item__title">Console output</p>
          </div>
          <code>
            {TerminalText}
          </code>
        </div>
        <div className={"jenkins-cards__item"}><p className="jenkins-cards__item__title">Details</p>
          Started 5 mo 15 days ago
          Took 3 min 2 sec
          Started by user Jan Faracik
          Build parameters
        </div>
        <div className={"jenkins-cards__item"}><p className="jenkins-cards__item__title">Links</p></div>
        <div className={"jenkins-cards__item jenkins-cards__item--wide"}><p className="jenkins-cards__item__title">Cucumber</p></div>
      </div>
    </div>
  );
}

export default Dashboard;
