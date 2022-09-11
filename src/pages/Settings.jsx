import {
  AlbumsOutline, BrushOutline,
  ExtensionPuzzleOutline, HelpCircleOutline, HelpOutline, LockClosedOutline, OpenOutline,
  PeopleOutline,
  SettingsOutline
} from 'react-ionicons'
import {NavLink, Route, Switch} from "react-router-dom";
import System from "./settings/System";
import Tools from "./settings/Tools";
import Appearance from "./settings/Appearance";

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
          name: "Appearance",
          link: "appearance"
        },
        {
          icon: <AlbumsOutline />,
          name: "Tools",
          link: "tools"
        },
        {
          icon: <AlbumsOutline />,
          name: "Nodes and clouds",
          link: "nodes"
        },
        {
          icon: <ExtensionPuzzleOutline />,
          name: "Plugins",
          link: "plugins",
          external: true
        }
      ]
    },
    {
      name: "Security",
      items: [
        {
          icon: <LockClosedOutline />,
          name: "Global security",
          link: "global-security"
        },
        {
          icon: <PeopleOutline />,
          name: "Users",
          link: "users"
        }
      ]
    },
    {
      name: "Other",
      items: [
        {
          icon: <AlbumsOutline />,
          name: "Example",
          link: "idk"
        },
        {
          icon: <AlbumsOutline />,
          name: "Example",
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

        {items.map(category => {
          return (
            <>
              <h2 className="jenkins-sidebar__heading">{category.name}</h2>
              {category.items.map(item => {
                return (
                  <NavLink to={`../settings/${item.link}`} className="jenkins-sidebar__item" activeClassName="jenkins-sidebar__item--selected" exact>
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
        <Switch>
          <Route path="/settings" exact="true">
            <System />
          </Route>
          <Route path="/settings/tools">
            <Tools />
          </Route>
          <Route path="/settings/appearance">
            <Appearance />
          </Route>
        </Switch>
        <button style={{"padding": "0.75rem 1.8rem", "height": "unset"}} className={"jenkins-button jenkins-button--primary"} type="submit">Save</button>
      </div>
    </div>
  );
}

export default Settings;
