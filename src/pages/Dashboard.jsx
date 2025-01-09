import {Link, NavLink} from "react-router-dom";
import {
  AddOutline,
  FingerPrintOutline, LogoGithub,
  NewspaperOutline,
  PencilOutline, PlayOutline,
  ScanCircleOutline,
  SunnyOutline
} from "react-ionicons";
import Overflow from "../components/Overflow";
import {projects} from "../data/projects";
import Card from "../components/Card";
import BuildTable from "../components/BuildTable";
import Avatar from "../components/Avatar";
import people from "../data/people";
import Tippy from "@tippyjs/react";
import tippyProps from "../data/tooltips";
import builds from "../data/builds";
import CollapsibleLink from "../components/CollapsibleLink";
import settings from "../data/settings";
import dashboard from "../data/dashboard";

function Dashboard() {

  let hour = new Date().getHours();
  const items = dashboard

  return (
    <div className="jenkins-body jenkins-body--sidebar">
      <div className="jenkins-sidebar">
        <div className="jenkins-app-bar">
          <div className={"jenkins-app-bar__content"}>
            <div className="rotating-title">
              <p>{hour < 12 && "Morning" || hour < 18 && "Afternoon" || "Evening"} Jan</p>
              <p>Jenkins</p>
            </div>
            <h1>Dashboard</h1>
          </div>
        </div>

        {items.map(category => {
          return (
            <>
              <h2 key={category.name} className="jenkins-sidebar__heading">{category.name}</h2>
              {category.items.map(item => {
                return item.type === 'separator' ? (
                  <hr />
                ) : (
                  <>
                    <NavLink key={item.name}
                             to={`../${item.link === "" ? item.link : item.name.toLowerCase().replaceAll(" ", "-")}`}
                             className={({isActive}) => "jenkins-sidebar__item" + (isActive ? " jenkins-sidebar__item--selected" : "")}
                             end>
                      <div className="jenkins-sidebar__item__icon">
                        {item.icon}
                      </div>
                      {item.name}
                    </NavLink>
                  </>
                )
              })}
            </>
          )
        })}
      </div>

      <div className="jenkins-body jenkins-body--inner">
        <div className="jenkins-app-bar" style={{"margin": "30px 0 30px 0"}}>
          <div className={"jenkins-app-bar__content"}>
            <div className="rotating-title" style={{ visibility: "collapse" }}>
              <p>Jenkins</p>
            </div>
            <h1>All projects</h1>
          </div>
          <div className={"jenkins-app-bar__controls"}>
            <Link to={"/new"} className={"jenkins-button"}>
              <AddOutline/>
              <span className={"jenkins-mobile-hide"}>New project</span>
            </Link>
            <Overflow>
              <a className={"jenkins-mobile-hide"}>
                <PencilOutline/>
                Customize view
              </a>
              <hr className={"jenkins-mobile-hide"}/>
              <a>
                <ScanCircleOutline/>
                Project relationship
              </a>
              <a>
                <FingerPrintOutline/>
                Check file fingerprint
              </a>
              <hr/>
              <a>
                <SunnyOutline/>
                Icon legend
              </a>
              <a>
                <NewspaperOutline/>
                Atom feed
              </a>
            </Overflow>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 350px", gap: "1rem" }}>
          <BuildTable projects={projects} isFolder={false} />
          <div className={'iamsidebar'} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
                          <div className={"build-loading-icon"}>

                          </div>
                        </div>
                        <div className={"jenkins-build-history__item__link__details"}>
                          <p className="jenkins-build-history__item__link__details__build-number">#{build.name} - Jenkins - Master</p>
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
            <Card title={"People"} expandable={true} expandableLink={'/people'}>
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
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
