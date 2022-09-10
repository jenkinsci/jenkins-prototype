import {AccessibilityOutline, AlbumsOutline, ExtensionPuzzleOutline} from 'react-ionicons'
import {Link, NavLink, Route, Switch} from "react-router-dom";
import System from "./settings/System";
import Tools from "./settings/Tools";

function Settings() {

  const items = [
    {
      name: "General",
      items: [
        {
          icon: <AlbumsOutline />,
          name: "System",
          link: ""
        },
        {
          icon: <AlbumsOutline />,
          name: "Tools",
          link: "tools"
        },
        {
          icon: <ExtensionPuzzleOutline />,
          name: "Plugins",
          link: "plugins"
        }
      ]
    },
    {
      name: "Security",
      items: [
        {
          icon: <AlbumsOutline />,
          name: "Users",
          link: "users"
        },
        {
          icon: <AlbumsOutline />,
          name: "Tools",
          link: "tools"
        },
        {
          icon: <AlbumsOutline />,
          name: "Tools",
          link: "tools"
        }
      ]
    },
    {
      name: "Other",
      items: [
        {
          icon: <AlbumsOutline />,
          name: "System",
          link: "idk"
        },
        {
          icon: <AlbumsOutline />,
          name: "Tools",
          link: "tools"
        },
        {
          icon: <AlbumsOutline />,
          name: "About Jenkins",
          link: "about"
        }
      ]
    }
  ]

  return (
    <div className="jenkins-body jenkins-body--sidebar">
      <div className="jenkins-sidebar">
        <h1 style={{"margin": "30px"}}>Settings</h1>

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
                  </NavLink>
                )
              })}
            </>
          )
        })}
      </div>
      <div className="jenkins-body jenkins-body--inner">
        <Switch>
          <Route path="/settings">
            <System />
          </Route>
          <Route path="/tools">
            <Tools />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Settings;
