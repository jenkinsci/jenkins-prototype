import {Link, NavLink, Route, Routes} from "react-router-dom";
import {
  DownloadOutline,
  ExtensionPuzzleOutline,
  SettingsOutline
} from "react-ionicons";
import NotImplemented from "./settings/NotImplemented";
import Available from "./plugin-manager/available";
import UpdatesAndInstalled from "./plugin-manager/updates-and-installed";

function PluginManager() {
  return (
    <div className="jenkins-body jenkins-body--sidebar app-plugin-manager">
      <div className="jenkins-sidebar">
        <div className={"jenkins-breadcrumbs"} style={{"margin": "30px 30px 0 30px"}}>
          <Link to={"/settings"} className={"jenkins-breadcrumb"}>Settings</Link>
          <Link to={"/settings/plugins"} className={"jenkins-breadcrumb"}>Plugins</Link>
        </div>
        <h1 style={{"margin": "15px 30px 45px 30px"}}>Plugins</h1>
        <NavLink to={"/settings/plugins/"} className={({ isActive }) => "jenkins-sidebar__item" + (isActive ? " jenkins-sidebar__item--selected" : "")} end>
          <div className="jenkins-sidebar__item__icon">
            <ExtensionPuzzleOutline />
          </div>
          Available plugins
        </NavLink>
        <NavLink to={"/settings/plugins/updates-and-installed"} className={({ isActive }) => "jenkins-sidebar__item" + (isActive ? " jenkins-sidebar__item--selected" : "")}>
          <div className="jenkins-sidebar__item__icon">
            <DownloadOutline />
          </div>
          Updates and installed plugins
        </NavLink>
        <NavLink to={"/settings/plugins/advanced–settings"} className={({ isActive }) => "jenkins-sidebar__item" + (isActive ? " jenkins-sidebar__item--selected" : "")}>
          <div className="jenkins-sidebar__item__icon">
            <SettingsOutline />
          </div>
          Advanced settings
        </NavLink>
      </div>
      <div className="jenkins-body jenkins-body--inner">
        <Routes>
          <Route path="/" exact="true" element={<Available />} />
          <Route path="/updates-and-installed" element={<UpdatesAndInstalled />} />
          <Route path="*" element={<NotImplemented/>} />
        </Routes>
      </div>
    </div>
  );
}

export default PluginManager;
