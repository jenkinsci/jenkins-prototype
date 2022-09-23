import {Link} from "react-router-dom";
import {
  CogOutline,
  EllipseOutline,
  FolderOpenOutline,
  FolderOutline,
  GitBranchOutline,
  GitNetworkOutline
} from "react-ionicons";

export default function ProjectTypes() {
  const items = [
    {
      icon: <EllipseOutline />,
      name: "Freestyle project",
      description: "This is the central feature of Jenkins. Jenkins will build your project, combining any SCM with any build system, and this can be even used for something other than software build."
    },
    {
      icon: <GitNetworkOutline />,
      name: "Pipeline project",
      description: "Orchestrates long-running activities that can span multiple build agents. Suitable for building pipelines (formerly known as workflows) and/or organizing complex activities that do not easily fit in free-style job type."
    },
    {
      icon: <CogOutline />,
      name: "Multi-configuration project",
      description: "Suitable for projects that need a large number of different configurations, such as testing on multiple environments, platform-specific builds, etc."
    },
    {
      icon: <FolderOutline />,
      name: "Folder",
      description: "Creates a container that stores nested items in it. Useful for grouping things together. Unlike view, which is just a filter, a folder creates a separate namespace, so you can have multiple things of the same name as long as they are in different folders."
    },
    {
      icon: <GitBranchOutline />,
      name: "Multibranch pipeline",
      description: "Creates a set of Pipeline projects according to detected branches in one SCM repository."
    },
    {
      icon: <FolderOpenOutline />,
      name: "Organisation folder",
      description: "Creates a set of multibranch project subfolders by scanning for repositories."
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

      <br />

      <a className={"jenkins-button jenkins-button--primary"}>
        Next
      </a>
    </>
  );
}
