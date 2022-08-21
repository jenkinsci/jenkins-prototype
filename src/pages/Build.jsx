import TerminalText from "../terminal";
import {Link} from "react-router-dom";
import {
  CopyOutline,
  DownloadOutline,
  EllipsisHorizontalOutline, PersonOutline,
  PlayOutline,
  ResizeOutline,
  TimeOutline, TimerOutline
} from "react-ionicons";
import Tippy from "@tippyjs/react";
import Stageview from "../components/Stageview";

function Dashboard() {
  return (
    <div className="jenkins-body">
      <div className={"jenkins-breadcrumbs"}>
        <Link to={"/"} className={"jenkins-breadcrumb"}>Dashboard</Link>
        <Link to={"/"} className={"jenkins-breadcrumb"}>Core</Link>
        <Link to={"/"} className={"jenkins-breadcrumb"}>Jenkins</Link>
        <Link to={"/"} className={"jenkins-breadcrumb"}>master</Link>
        <Link to={"/"} className={"jenkins-breadcrumb"}>Build 374</Link>
      </div>
      <div className="jenkins-app-bar">
        <div className={"jenkins-app-bar__content"}>
          <h1 className={"jenkins-project-heading"}>
            <span className={"jenkins-passing-icon"}></span>
            Build 374
          </h1>
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
            <p className="jenkins-cards__item__title">
              Console output
              <div className="jenkins-cards__item__title__actions">
                <Tippy content="Copy">
                  <a href="#">
                    <CopyOutline />
                  </a>
                </Tippy>
                <Tippy content="Download">
                  <a href="#">
                    <DownloadOutline />
                  </a>
                </Tippy>
                <Tippy content="Fullscreen">
                  <a href="#">
                    <ResizeOutline />
                  </a>
                </Tippy>
              </div>
            </p>
          </div>
          <code>
            {TerminalText}
          </code>
        </div>
        <div className={"jenkins-cards__item"}><p className="jenkins-cards__item__title">Details</p>
          <p className={"app-details__item"}>
            <PersonOutline />
            Started by user Jan Faracik
          </p>
          <p className={"app-details__item"}>
            <TimeOutline />
            Started 5 mo 15 days ago
          </p>
          <p className={"app-details__item"}>
            <TimerOutline />
            Took 3 min 2 sec
          </p>
        </div>
        <div className={"jenkins-cards__item"}>
          <p className="jenkins-cards__item__title">Artifacts</p>
          <a className={"jenkins-card-big-link"} href="#">jenkins-bom-2.365-rc32749.fc4dc4e55f29.pom</a>
          <a className={"jenkins-card-big-link"} href="#">jenkins-bom-2.365-rc32749.fc4dc4e55f29.pom</a>
          <a className={"jenkins-card-big-link"} href="#">jenkins-bom-2.365-rc32749.fc4dc4e55f29.pom</a>
          <a className={"jenkins-card-big-link"} href="#">jenkins-bom-2.365-rc32749.fc4dc4e55f29.pom</a>
          <a className={"jenkins-card-big-link"} href="#">jenkins-bom-2.365-rc32749.fc4dc4e55f29.pom</a>
          <a className={"jenkins-card-big-link"} href="#">jenkins-bom-2.365-rc32749.fc4dc4e55f29.pom</a>
          <a className={"jenkins-card-big-link"} href="#">jenkins-bom-2.365-rc32749.fc4dc4e55f29.pom</a>
        </div>
        <div className={"jenkins-cards__item jenkins-cards__item--wide"}>
          <p className="jenkins-cards__item__title">
            Stage view
            <div className="jenkins-cards__item__title__actions">
              <Tippy content="Fullscreen">
                <a href="#">
                  <ResizeOutline />
                </a>
              </Tippy>
            </div>
          </p>
          <Stageview />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
