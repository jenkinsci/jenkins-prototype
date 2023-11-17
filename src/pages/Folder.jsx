import {Link} from "react-router-dom";
import { LogoGithub, PlayOutline } from "react-ionicons";
import Overflow from "../components/Overflow";
import {folderProjects} from "../data/projects";
import Card from "../components/Card";
import BuildTable from "../components/BuildTable";
import builds from "../data/builds";

function Dashboard() {
  return (
    <div className="jenkins-body">
      <div className={"jenkins-breadcrumbs"}>
        <Link to={"/"} className={"jenkins-breadcrumb"}>Dashboard</Link>
        <Link to={"/folder"} className={"jenkins-breadcrumb"}>Jenkins</Link>
      </div>
      <div className="jenkins-app-bar">
        <div className={"jenkins-app-bar__content"}>
          <h1>Jenkins</h1>
        </div>
        <div className={"jenkins-app-bar__controls"}>
          <Link to={"/new"} className={"jenkins-button"}>
            <LogoGithub />
            <span className={"jenkins-mobile-hide"}>GitHub</span>
          </Link>
          <Link to={"/configure"} className={"jenkins-button"}>
            Configure
          </Link>
          <Overflow></Overflow>
        </div>
      </div>

      <div className="iamsidebar">
        <div className="sidebar-item jenkins-mobile-hide">
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
                        <p className="jenkins-build-history__item__link__details__build-number">#{build.name} - Jenkins
                          - Master</p>
                        <p className="jenkins-build-history__item__link__details__message">{build.message}</p>
                      </div>
                    </Link>
                    <Overflow clazz={"jenkins-button--transparent"}>
                      <a className={"app-color-green"}>
                        <PlayOutline/>
                        Rebuild
                      </a>
                      <hr/>
                      <a>
                        <LogoGithub/>
                        Open on GitHub
                      </a>
                    </Overflow>
                  </div>
                )
              })}
            </div>
          </Card>
        </div>
        <BuildTable projects={folderProjects}/>
      </div>
    </div>
  );
}

export default Dashboard;
