import {Link} from "react-router-dom";
import {LockClosedOutline, LogoDocker, ShapesOutline} from "react-ionicons";

export default function GitHub() {
  const items = [
    {
      icon: <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png"} />,
      name: "Jenkins",
      description: "Jenkins automation server"
    },
    {
      icon: <ShapesOutline />,
      name: "Dark Theme Plugin",
      description: "Jenkins Dark Theme"
    },
    {
      icon: <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png"} />,
      name: "Jenkins Prototype",
      description: "Prototype of Jenkins UI",
      locked: true
    },
    {
      icon: <LogoDocker />,
      name: "docker",
      description: "Docker official jenkins repo"
    },
    {
      icon: <LogoDocker />,
      name: "helm-charts",
      description: "Jenkins community Helm charts"
    },
    {
      icon: <LogoDocker />,
      name: "configuration-as-code-plugin",
      description: "Jenkins Configuration as Code Plugin"
    }
  ]

  return (
    <>
      <h1 style={{"margin": "30px 0 30px 0"}}>GitHub</h1>

      <p style={{color: "var(--color-secondary)"}}>Import a GitHub repository straight into Jenkins</p>

      <div className={"app-project-links"}>
        {items.map(item => {
          return (
            <Link className={"app-project-link"} to={"/"}>
              <div className={"app-project-link__icon"}>
                {item.icon}
              </div>
              <div className={"app-project-link__text"}>
                <p>
                  {item.name}
                  {item.locked &&
                    <LockClosedOutline />
                  }
                </p>
                <p>{item.description}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  );
}
