import {SearchOutline,} from 'react-ionicons'
import {NavLink, Route, Routes, useLocation} from "react-router-dom";
import System from "./settings/System";
import Tools from "./settings/Tools";
import About from "./settings/About";
import Appearance from "./settings/Appearance";
import NotImplemented from "./settings/NotImplemented";
import settings from "../data/settings";
import Available from "./plugin-manager/available";
import UpdatesAndInstalled from "./plugin-manager/updates-and-installed";
import CollapsibleLink from "../components/CollapsibleLink";

function Settings() {

  const items = settings

  return (
    <div className="jenkins-body jenkins-body--sidebar">
      <div className="jenkins-sidebar">
        <h1 style={{"margin": "30px 30px 0px 30px"}}>Settings</h1>

        <div className={"app-search-bar"} style={{"margin": "20px 0 0 20px"}}>
          <SearchOutline/>
          <input type="search" placeholder={"Search"}/>
        </div>

        {items.map(category => {
          return (
            <>
              <h2 key={category.name} className="jenkins-sidebar__heading">{category.name}</h2>
              {category.items.map(item => {
                return item.children ? (
                  <CollapsibleLink item={item} />
                ) : (
                  <>
                    <NavLink key={item.name}
                             to={`../settings/${item.link === "" ? item.link : item.name.toLowerCase().replaceAll(" ", "-")}`}
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
        <Routes>
          <Route path="/" exact="true" element={<System/>}/>
          <Route path="/tools" element={<Tools/>}/>
          <Route path="/plugins/available-plugins" element={<Available/>}/>
          <Route path="/plugins/updates-and-installed-plugins" element={<UpdatesAndInstalled/>}/>
          <Route path="/appearance" element={<Appearance/>}/>
          <Route path="/about-jenkins" element={<About/>}/>
          <Route path="*" element={<NotImplemented/>}/>
        </Routes>
        {!useLocation().pathname.includes("tools") &&
          <button style={{"padding": "0.75rem 1.8rem", "height": "unset"}}
                  className={"jenkins-button jenkins-button--primary"} type="submit">Save</button>
        }
      </div>
    </div>
  );
}

export default Settings;
