import {
  AnalyticsOutline,
  BrushOutline, CloudOutline,
  CodeWorkingOutline,
  CubeOutline,
  ExtensionPuzzleOutline,
  FileTrayFullOutline,
  HammerOutline,
  HelpCircleOutline,
  LockClosedOutline,
  OpenOutline,
  PeopleOutline,
  PowerOutline,
  ReloadOutline, SearchOutline,
  ServerOutline,
  SettingsOutline,
  TerminalOutline
} from 'react-ionicons'
import {NavLink, Route, Routes} from "react-router-dom";
import System from "./settings/System";
import Tools from "./settings/Tools";
import Appearance from "./settings/Appearance";
import NotImplemented from "./settings/NotImplemented";

function Settings() {

  const items = [
    {
      name: "General",
      items: [
        {
          icon: <SettingsOutline />,
          name: "System",
          link: ""
        },
        {
          icon: <BrushOutline />,
          name: "Appearance"
        },
        {
          icon: <HammerOutline />,
          name: "Tools"
        },
        {
          icon: <CloudOutline />,
          name: "Nodes and clouds"
        },
        {
          icon: <ExtensionPuzzleOutline />,
          name: "Plugins",
          external: true
        }
      ]
    },
    {
      name: "Security",
      items: [
        {
          icon: <LockClosedOutline />,
          name: "Global security"
        },
        {
          icon: <PeopleOutline />,
          name: "People"
        }
      ]
    },
    {
      name: "Troubleshooting",
      items: [
        {
          icon: <CubeOutline />,
          name: "Manage old data"
        }
      ]
    },
    {
      name: "Actions",
      items: [
        {
          icon: <ReloadOutline />,
          name: "Reload Jenkins"
        },
        {
          icon: <TerminalOutline />,
          name: "Jenkins CLI"
        },
        {
          icon: <CodeWorkingOutline />,
          name: "Script console"
        },
        {
          icon: <PowerOutline />,
          name: "Shutdown Jenkins"
        }
      ]
    },
    {
      name: "Other",
      items: [
        {
          icon: <ServerOutline />,
          name: "System information",
          link: "idk"
        },
        {
          icon: <FileTrayFullOutline />,
          name: "System log",
          link: "idk"
        },
        {
          icon: <AnalyticsOutline />,
          name: "Load statistics",
          link: "idk"
        },
        {
          icon: <HelpCircleOutline />,
          name: "About Jenkins",
          link: "about"
        }
      ]
    }
  ]

  return (
    <div className="jenkins-body jenkins-body--sidebar">
      <div className="jenkins-sidebar">
        <h1 style={{"margin": "30px 30px 0px 30px"}}>Settings</h1>

        <div className={"app-search-bar"} style={{"margin": "20px 0 0 20px"}}>
          <SearchOutline />
          <input type="search" placeholder={"Search"} />
        </div>

        {items.map(category => {
          return (
            <>
              <h2 key={category.name} className="jenkins-sidebar__heading">{category.name}</h2>
              {category.items.map(item => {
                return (
                  <NavLink key={item.name} to={`../settings/${item.link === "" ? item.link : item.name.toLowerCase().replaceAll(" ", "-")}`} className={({ isActive }) => "jenkins-sidebar__item" + (isActive ? " jenkins-sidebar__item--selected" : "")} end>
                    <div className="jenkins-sidebar__item__icon">
                      {item.icon}
                    </div>
                    {item.name}
                    {item.external === true &&
                      <div className="jenkins-sidebar__item__icon external">
                        <OpenOutline />
                      </div>
                    }
                  </NavLink>
                )
              })}
            </>
          )
        })}
      </div>
      <div className="jenkins-body jenkins-body--inner">
        <Routes>
          <Route path="/" exact="true" element={<System/>} />
          <Route path="/tools" element={<Tools/>} />
          <Route path="/appearance"  element={<Appearance/>} />
          <Route path="*" element={<NotImplemented/>} />
        </Routes>
        <button style={{"padding": "0.75rem 1.8rem", "height": "unset"}} className={"jenkins-button jenkins-button--primary"} type="submit">Save</button>
      </div>
    </div>
  );
}

export default Settings;
