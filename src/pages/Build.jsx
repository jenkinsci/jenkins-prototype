import TerminalText from "../terminal";
import {Link} from "react-router-dom";
import {
  CopyOutline,
  DownloadOutline,
  FingerPrintOutline,
  GitCommitOutline,
  GitPullRequestOutline,
  HourglassOutline,
  PersonOutline,
  PlayOutline,
  ShieldOutline,
  TimeOutline,
  TimerOutline
} from "react-ionicons";
import Tippy from "@tippyjs/react";
import Stageview from "../components/Stageview";
import ResizeOutline from "../components/icons/ResizeOutline";
import Overflow from "../components/Overflow";
import tippyProps from "../data/tooltips";

function Dashboard() {
  return (
    <div className="jenkins-body">
      <div className={"jenkins-breadcrumbs"}>
        <Link to={"/"} className={"jenkins-breadcrumb"}>Dashboard</Link>
        <Link to={"/project"} className={"jenkins-breadcrumb"}>Core</Link>
        <Link to={"/project"} className={"jenkins-breadcrumb"}>Jenkins</Link>
        <Link to={"/project"} className={"jenkins-breadcrumb"}>master</Link>
        <Link to={"/project/build"} className={"jenkins-breadcrumb"}>Build 374</Link>
      </div>
      <div className="jenkins-app-bar jenkins-app-bar--responsive">
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
          <Overflow>
            <a>
              <FingerPrintOutline />
              Fingerprints
            </a>
            <hr/>
            <a>
              <ShieldOutline />
              Embeddable Build Status
            </a>
          </Overflow>
        </div>
      </div>
      <h2 style={{"margin": "0 0 0 10px"}}>Add updates count badge to Updates sidebar item</h2>
      <div className={"jenkins-cards"}>
        <div className={"jenkins-cards__item jenkins-cards__item--wide jenkins-build__terminal-card app-console-colors"}>
          <div className="jenkins-cards__item__title-float">
            <p className="jenkins-cards__item__title">
              Console output
              <div className="jenkins-cards__item__title__actions">
                <Tippy content="Copy" {...tippyProps}>
                  <a href="#">
                    <CopyOutline />
                  </a>
                </Tippy>
                <Tippy content="Download" {...tippyProps}>
                  <a href="#">
                    <DownloadOutline />
                  </a>
                </Tippy>
                <Tippy content="Expand" {...tippyProps}>
                  <Link to="/project/build/console">
                    <ResizeOutline />
                  </Link>
                </Tippy>
              </div>
            </p>
          </div>
          <code className={"console-code "}>
            {TerminalText.split("\n").map((line, index) => {
              return (
                <p><span>{index + 1}</span>{ line }</p>
              )
            })}
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
            <HourglassOutline />
            Queued 10 sec
          </p>
          <p className={"app-details__item"}>
            <TimerOutline />
            Took 3 min 2 sec
          </p>
          <p className={"app-details__item"}>
            <GitPullRequestOutline />
            <a className={"app-details__item--link"} href="https://github.com/jenkinsci/jenkins/pull/7084">#7084</a>
          </p>
          <p className={"app-details__item"}>
            <GitCommitOutline />
            <a className={"app-details__item--link"} href="https://github.com/jenkinsci/jenkins/commit/82df2555089391a0dd1a33813c6609e882021d43">82df255</a>
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
              <Tippy content="Expand" {...tippyProps}>
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
