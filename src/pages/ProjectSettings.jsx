import {AccessibilityOutline, AlbumsOutline, ExtensionPuzzleOutline} from 'react-ionicons'
import {Link} from "react-router-dom";

function ProjectSettings() {
  return (
    <div className="jenkins-body jenkins-body--sidebar">
      <div className="jenkins-sidebar">
        <div className={"jenkins-breadcrumbs"} style={{"margin": "30px 30px 0 30px"}}>
          <Link to={"/"} className={"jenkins-breadcrumb"}>Dashboard</Link>
          <Link to={"/folder"} className={"jenkins-breadcrumb"}>Jenkins</Link>
          <Link to={"/project"} className={"jenkins-breadcrumb"}>master</Link>
        </div>
        <h1 style={{"margin": "15px 30px 30px 30px"}}>Manage</h1>
        <a className="jenkins-sidebar__item jenkins-sidebar__item--selected">
          <div className="jenkins-sidebar__item__icon">
            <AlbumsOutline />
          </div>
          General
        </a>
        <a className="jenkins-sidebar__item">
          <div className="jenkins-sidebar__item__icon">
            <AccessibilityOutline />
          </div>
          Source code management
        </a>
        <a className="jenkins-sidebar__item">
          <div className="jenkins-sidebar__item__icon">
            <ExtensionPuzzleOutline />
          </div>
          Build triggers
        </a>
        <a className="jenkins-sidebar__item">
          <div className="jenkins-sidebar__item__icon">
            <AlbumsOutline />
          </div>
          Build environment
        </a>
        <a className="jenkins-sidebar__item">
          <div className="jenkins-sidebar__item__icon">
            <AccessibilityOutline />
          </div>
          Bindings
        </a>
        <a className="jenkins-sidebar__item">
          <div className="jenkins-sidebar__item__icon">
            <AccessibilityOutline />
          </div>
          Build
        </a>
        <a className="jenkins-sidebar__item">
          <div className="jenkins-sidebar__item__icon">
            <AlbumsOutline />
          </div>
          Post-build actions
        </a>
      </div>
      <div className="jenkins-body jenkins-body--inner">
        <h1 style={{"margin": "60px 0 0 0"}}>General</h1>

      </div>
    </div>
  );
}

export default ProjectSettings;
