import {Link} from "react-router-dom";
import {
  AccessibilityOutline,
  AlbumsOutline,
  DuplicateOutline,
  ExtensionPuzzleOutline,
  LogoGithub, LogoGitlab
} from "react-ionicons";
import Green from "../green.svg";
import Sun from "../sun.svg";

function NewProject() {
  const items = [
    {
      icon: <LogoGithub/>,
      title: "Jenkins",
      description: "16 hours ago"
    },
    {
      icon: <LogoGithub/>,
      title: "Jenkins",
      description: "16 hours ago"
    },
    {
      icon: <LogoGithub/>,
      title: "Jenkins",
      description: "16 hours ago"
    },
    {
      icon: <LogoGithub/>,
      title: "Jenkins",
      description: "16 hours ago"
    },
    {
      icon: <LogoGithub/>,
      title: "Jenkins",
      description: "16 hours ago"
    },
    {
      icon: <LogoGithub/>,
      title: "Jenkins",
      description: "16 hours ago"
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
        <p style={{"margin": "15px 30px 30px 30px", "opacity": 0.75}}>Lorem ipsum dollar</p>
        <a className="jenkins-sidebar__item jenkins-sidebar__item--selected">
          <div className="jenkins-sidebar__item__icon">
            <AlbumsOutline />
          </div>
          Project types
        </a>
        <a className="jenkins-sidebar__item">
          <div className="jenkins-sidebar__item__icon">
            <DuplicateOutline />
          </div>
          Duplicate an existing project
        </a>
        <p style={{"margin": "45px 30px 25px 30px", "opacity": 0.75}}>Integrate with</p>
        <a className="jenkins-sidebar__item">
          <div className="jenkins-sidebar__item__icon">
            <LogoGithub />
          </div>
          GitHub
        </a>
        <a className="jenkins-sidebar__item">
          <div className="jenkins-sidebar__item__icon">
            <LogoGitlab />
          </div>
          GitLab
        </a>
      </div>
      <div className="jenkins-body jenkins-body--inner">
        <h2>
          Project types
        </h2>
        <div className={"app-new-project__items"}>
          {items.map((item) => {
            return (
              <Link to={"#"} className={"app-new-project__item"}>
                {item.icon}
                <div>
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default NewProject;
