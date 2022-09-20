import {Link} from "react-router-dom";
import {LockClosedOutline, ShapesOutline} from "react-ionicons";

export default function GitHub() {
  const items = [
    {
      icon: <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png"} />,
      name: "Jenkins",
      description: "1231231231231"
    },
    {
      icon: <ShapesOutline />,
      name: "Dark Theme Plugin",
      description: "12312313123"
    },
    {
      icon: <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png"} />,
      name: "Jenkins Prototype",
      description: "Prototype of Jenkins UI",
      locked: true
    }
  ]

  return (
    <>
      <h1 style={{"margin": "30px 0 30px 0"}}>GitHub</h1>

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
