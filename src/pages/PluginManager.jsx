import {Link} from "react-router-dom";
import {AccessibilityOutline, AlbumsOutline, ExtensionPuzzleOutline, PlayOutline, SearchOutline} from "react-ionicons";
import Tippy from "@tippyjs/react";
import Green from "../green.svg";
import Sun from "../sun.svg";

function PluginManager() {
  const items = [
    {
      name: "Credentials",
      released: "16 hours ago",
      description: "This plugin allows you to store credentials in Jenkins."
    },
    {
      name: "SSH Credentials",
      released: "16 hours ago",
      description: "Allows storage of SSH credentials in Jenkins"
    },
    {
      name: "JUnit",
      released: "16 hours ago",
      description: "Allows JUnit-format test results to be published."
    },
    {
      name: "GitHub",
      released: "16 hours ago",
      description: "Integrates GitHub into Jenkins"
    }
  ]

  for (let i = 0; i < 30; i++) {
    items.push({
      name: "SCM API",
      released: "16 hours ago",
      description: "This plugin provides a new enhanced API for interacting with SCM svstems"
    })
  }

  return (
    <div className="jenkins-body jenkins-body--sidebar app-plugin-manager">
      <div className="jenkins-sidebar">
        <div className={"jenkins-breadcrumbs"} style={{"margin": "30px 30px 0 30px"}}>
          <Link to={"/"} className={"jenkins-breadcrumb"}>Settings</Link>
          <Link to={"/project"} className={"jenkins-breadcrumb"}>Plugins</Link>
        </div>
        <h1 style={{"margin": "15px 30px 45px 30px"}}>Plugins</h1>
        <a className="jenkins-sidebar__item jenkins-sidebar__item--selected">
          <div className="jenkins-sidebar__item__icon">
            <AlbumsOutline />
          </div>
          Available plugins
        </a>
        <a className="jenkins-sidebar__item">
          <div className="jenkins-sidebar__item__icon">
            <AccessibilityOutline />
          </div>
          Updates and installed plugins
        </a>
        <a className="jenkins-sidebar__item">
          <div className="jenkins-sidebar__item__icon">
            <ExtensionPuzzleOutline />
          </div>
          Advanced settings
        </a>
      </div>
      <div className="jenkins-body jenkins-body--inner">
        <div className={"jenkins-breadcrumbs"} style={{"margin": "30px 30px 0 30px"}}>
          <Link to={"/"} className={"jenkins-breadcrumb"} style={{"opacity": 0}}>Settings</Link>
        </div>
        <div className={"big-search-bar"}>
          <SearchOutline />
          Search available plugins
        </div>
        <table className={"jenkins-table"}>
          <thead>
          <tr>
            <th>Name</th>
            <th>Released</th>
          </tr>
          </thead>
          <tbody>
          {items.map((item) => {
            return (
              <tr key={item.name}>
                <td>
                  <div className={"app-plugin"}>
                    <Link className={"jenkins-link"} to={"/project"}>{item.name}</Link>
                    <div className={"app-tags"}>
                      <div>Tag 1</div>
                      <div>Tag 2</div>
                      <div>Tag 3</div>
                    </div>
                    <p className={"description"}>{item.description}</p>
                  </div>
                </td>
                <td>{item.released}</td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PluginManager;
