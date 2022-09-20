import {Link} from "react-router-dom";
import {SunnyOutline} from "react-ionicons";

export default function ProjectTypes() {
  const items = [
    {
      icon: <SunnyOutline />,
      name: "Freestyle project",
      description: "This is the central feature of Jenkins. Jenkins will build your project, combining any SCM with any build system, and this can be even used for something other than software build."
    }
  ]

  return (
    <>
      <h1 style={{"margin": "30px 0 30px 0"}}>Project types</h1>

      <div className={"app-project-links"}>
        {items.map(item => {
          return (
            <Link className={"app-project-link"} to={"/"}>
              <div className={"app-project-link__icon"}>
                {item.icon}
              </div>
              <div className={"app-project-link__text"}>
                <p>{item.name}</p>
                <p>{item.description}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  );
}
