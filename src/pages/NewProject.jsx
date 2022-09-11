import {Link, NavLink, Route, Switch} from "react-router-dom";
import {
  DuplicateOutline, LayersOutline,
  LogoGithub, LogoGitlab, OpenOutline
} from "react-ionicons";
import System from "./settings/System";
import Appearance from "./settings/Appearance";
import NotImplemented from "./settings/NotImplemented";
import ProjectTypes from "./new/ProjectTypes";
import GitHub from "./new/GitHub";

function NewProject() {
  const items = [
    {
      items: [
        {
          icon: <LayersOutline />,
          name: "Project types",
          link: ""
        },
        {
          icon: <DuplicateOutline />,
          name: "Duplicate an existing project"
        }
      ]
    },
    {
      name: "Integrate with",
      items: [
        {
          icon: <LogoGithub />,
          name: "GitHub"
        },
        {
          icon: <LogoGitlab />,
          name: "GitLab"
        }
      ]
    }
  ]

  return (
    <div className="jenkins-body jenkins-body--sidebar">
      <div className="jenkins-sidebar">
        <div className={"jenkins-breadcrumbs"} style={{"margin": "30px 30px 0 30px"}}>
          <Link to={"/"} className={"jenkins-breadcrumb"}>Dashboard</Link>
          <Link to={"/project"} className={"jenkins-breadcrumb"}>New project</Link>
        </div>
        <h1 style={{"margin": "15px 30px 30px 30px"}}>New project</h1>

        {items.map(category => {
          return (
            <>
              <h2 className="jenkins-sidebar__heading">{category.name}</h2>
              {category.items.map(item => {
                return (
                  <NavLink to={`../new/${item.link === "" ? item.link : item.name.toLowerCase().replaceAll(" ", "-")}`} className="jenkins-sidebar__item" activeClassName="jenkins-sidebar__item--selected" exact>
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
        <div className={"jenkins-breadcrumbs"} style={{"margin": "15px 30px 0 0", "opacity": "0"}}>
          <Link to={"/"} className={"jenkins-breadcrumb"}>Dashboard</Link>
          <Link to={"/project"} className={"jenkins-breadcrumb"}>New project</Link>
        </div>
        <Switch>
          <Route path="/new" exact="true">
            <ProjectTypes />
          </Route>
          <Route path="/new/github">
            <GitHub />
          </Route>
          <Route>
            <NotImplemented />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default NewProject;
