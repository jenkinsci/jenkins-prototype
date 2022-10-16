import {Link} from "react-router-dom";
import {
  AddOutline,
  FingerPrintOutline, LogoGithub,
  NewspaperOutline,
  PencilOutline, PlayOutline,
  ScanCircleOutline,
  SunnyOutline
} from "react-ionicons";
import Overflow from "../components/Overflow";
import projects from "../data/projects";
import Card from "../components/Card";
import BuildTable from "../components/BuildTable";
import Avatar from "../components/Avatar";
import people from "../data/people";
import Tippy from "@tippyjs/react";
import tippyProps from "../data/tooltips";
import builds from "../data/builds";

function Dashboard() {

  let hour = new Date().getHours();

  return (
    <div className="jenkins-body">
      <div className="jenkins-app-bar">
        <div className={"jenkins-app-bar__content"}>
          <div className="rotating-title">
            <p>{ hour < 12 && "Morning" || hour < 18 && "Afternoon" || "Evening" } Jan</p>
            <p>Jenkins</p>
          </div>
          <h1>Dashboard</h1>
        </div>
        <div className={"jenkins-app-bar__controls"}>
          <Link to={"/new"} className={"jenkins-button"}>
            <AddOutline/>
            <span className={"jenkins-mobile-hide"}>New project</span>
          </Link>
          <Overflow>
            <a>
              <PencilOutline />
              Customize view
            </a>
            <hr/>
            <a>
              <ScanCircleOutline />
              Project relationship
            </a>
            <a>
              <FingerPrintOutline />
              Check file fingerprint
            </a>
            <hr/>
            <a>
              <SunnyOutline />
              Icon legend
            </a>
            <a>
              <NewspaperOutline />
              Atom feed
            </a>
          </Overflow>
        </div>
      </div>

      <div className="iamsidebar">
        <div className="sidebar-item jenkins-mobile-hide">
          <Card>
            <p className="jenkins-cards__item__title" style={{margin: 0, lineHeight: 1.66}}>
              This instance hosts several GitHub Organization folders organized by subject area.
              <br/>
              <br/>
              To add continuous integration and PR builds for a Jenkins plugin in the jenkinsci organization, just add a Jenkinsfile to your repository.
            </p>
          </Card>
          <Card title={"Running builds"}>
            <div className={"jenkins-build-history"} style={{maxHeight: "300px"}}>
              {builds.map(build => {
                return (
                  <div className={"jenkins-build-history__item"}>
                    <Link to={"/project/build/" + build.name} className={"jenkins-build-history__item__link"}>
                      <div className={"jenkins-build-history__item__link__icon"}>
                        {build.state}
                        <div className={"jenkins-build-history__item__link__icon__owner"}>
                          {build.icon ? build.icon : (
                            <LogoGithub color={"var(--foreground-color)"} cssClasses={"ionicon"} />
                          )}
                        </div>
                      </div>
                      <div className={"jenkins-build-history__item__link__details"}>
                        <p className="jenkins-build-history__item__link__details__build-number">#{build.name}</p>
                        <p className="jenkins-build-history__item__link__details__message">{build.message}</p>
                      </div>
                    </Link>
                    <Overflow clazz={"jenkins-button--transparent"}>
                      <a className={"app-color-green"}>
                        <PlayOutline />
                        Rebuild
                      </a>
                      <hr/>
                      <a>
                        <LogoGithub />
                        Open on GitHub
                      </a>
                    </Overflow>
                  </div>
                )
              })}
            </div>
          </Card>
          <Card title={"People"}>
            <div className={"app-people-avatars"}>
              {people.slice(0, 7).map(person => {
                return (
                  <Tippy content={person.name} {...tippyProps}>
                    <Link to={"/people/" + person.username}>
                      <Avatar person={person} size={"2.25rem"} />
                    </Link>
                  </Tippy>
                )
              })}
              <span>
                +7
              </span>
            </div>
          </Card>
        </div>
        <BuildTable projects={projects} />
      </div>
    </div>
  );
}

export default Dashboard;
