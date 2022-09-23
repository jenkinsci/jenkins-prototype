import {Link, NavLink, Route, Routes} from "react-router-dom";
import {DuplicateOutline, LayersOutline, LogoGithub, LogoGitlab, OpenOutline} from "react-ionicons";
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
              <h2 key={category.name} className="jenkins-sidebar__heading">{category.name}</h2>
              {category.items.map(item => {
                return (
                  <NavLink key={item.name} to={`../new/${item.link === "" ? item.link : item.name.toLowerCase().replaceAll(" ", "-")}`} className={({ isActive }) => "jenkins-sidebar__item" + (isActive ? " jenkins-sidebar__item--selected" : "")} end>
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
        <Routes>
          <Route path="/" element={<ProjectTypes />} />
          <Route path="/github" element={<GitHub />} />
          <Route path="*" element={<NotImplemented />} />
        </Routes>
      </div>
    </div>
  );
}

export default NewProject;
