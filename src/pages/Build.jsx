import TerminalText from "../terminal";
import {Link, useParams} from "react-router-dom";
import {
  CheckmarkDoneOutline,
  CopyOutline,
  DownloadOutline,
  FingerPrintOutline,
  GitCommitOutline,
  GitPullRequestOutline,
  HourglassOutline,
  PlayOutline,
  ShieldOutline,
  TimeOutline,
  TimerOutline
} from "react-ionicons";
import Tippy from "@tippyjs/react";
import ResizeOutline from "../components/icons/ResizeOutline";
import Overflow from "../components/Overflow";
import tippyProps from "../data/tooltips";
import people from "../data/people";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import PassingIcon from "../components/icons/PassingIcon";
import builds from "../data/builds";

function Build() {
  let { number } = useParams();
  number = number || "375";
  const build = builds.find(b => b.name === number);

  return (
    <div className="jenkins-body">
      <div className={"jenkins-breadcrumbs"}>
        <Link to={"/"} className={"jenkins-breadcrumb"}>Dashboard</Link>
        <Link to={"/project"} className={"jenkins-breadcrumb"}>Core</Link>
        <Link to={"/project"} className={"jenkins-breadcrumb"}>Jenkins</Link>
        <Link to={"/project"} className={"jenkins-breadcrumb"}>master</Link>
        <Link to={"/project/build/" + number} className={"jenkins-breadcrumb"}>#{build.name}</Link>
      </div>
      <div className="jenkins-app-bar jenkins-app-bar--responsive">
        <div className={"jenkins-app-bar__content"}>
          <h1 className={"jenkins-project-heading"}>
            {build.state}
            {build.message}
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
                  <Link to={`/project/build/${number}/console`}>
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
        <Card title={"Details"}>
          <p className={"app-details__item"}>
            <GitCommitOutline />
            <span>
              {build.message} - Commit
            <a className={"jenkins-link"} href="https://github.com/jenkinsci/jenkins/commit/82df2555089391a0dd1a33813c6609e882021d43"> 82df255</a>
            </span>
          </p>
          <p className={"app-details__item"}>
            <GitPullRequestOutline />
            <span>
              Add updates count badge to Updates sidebar item
              <a className={"jenkins-link"} href="https://github.com/jenkinsci/jenkins/pull/7084"> #7084</a>
            </span>
          </p>
          <hr />
          <p className={"app-details__item"}>
            <Avatar size={"1.6rem"} person={people.find(e => e.username === 'janfaracik')} />
            <div>Started by <Link className={"jenkins-link"} to={"/people/janfaracik"}>Jan Faracik</Link></div>
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
        </Card>
        <Card title={"Artifacts"}>
          <a className={"jenkins-link"} style={{display: "flex", marginBottom: "1rem"}}>jenkins-core-2.370-rc32873.a_643d8fefa_72-javadoc.jar</a>
          <a className={"jenkins-link"} style={{display: "flex", marginBottom: "1rem"}}>jenkins-core-2.370-rc32873.a_643d8fefa_72-sources.jar</a>
          <a className={"jenkins-link"} style={{display: "flex", marginBottom: "1rem"}}>jenkins-core-2.370-rc32873.a_643d8fefa_72.jar</a>
          <a className={"jenkins-link"} style={{display: "flex", marginBottom: "1rem"}}>jenkins-core-2.370-rc32873.a_643d8fefa_72.pom</a>
        </Card>
        <Card title={"Test results"} expandable={true} expandableLink={"test-results"}>
          <div className={"app-linting-card"}>
            <CheckmarkDoneOutline />
            <p>All tests passed</p>
            <p>0 failures (±0), 273 skipped (+273), 56,679 ran</p>
            <p>Took 15 hours</p>
          </div>
        </Card>
        <Card title={"Test coverage"} expandable={true} expandableLink={"test-coverage"}>
          <p>Project Coverage:</p>
          <p>Line: 47.70% (-0.05%)</p>
          <p>Branch: 59.83% (-0.05%)</p>
          <p>Indirect Coverage Changes:</p>
          <p>Line: 36.23%</p>
          <p>Branch: 32.14%</p>
          <p>84 lines (16 files) are affected</p>
        </Card>
        <Card title={"ESLint"} expandable={true}>
          <div className={"app-linting-card"}>
            <CheckmarkDoneOutline />
            <p>No issues found</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Build;
