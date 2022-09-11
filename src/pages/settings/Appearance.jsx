import {Link} from "react-router-dom";
import {ExtensionPuzzleOutline} from "react-ionicons";

export default function Appearance() {
  const items = [
    {
      name: "Light",
    },
    {
      name: "Dark",
    },
    {
      name: "Black",
    },
    {
      name: "Solarized (Light)",
    },
    {
      name: "Solarized (Dark)",
    }
  ]

  return (
    <>
      <h1 style={{"margin": "30px 0 30px 0"}}>Appearance</h1>

      <div className="jenkins-form-item">
        <p className="jenkins-form-label">
          Theme
          <Link to={"/settings/plugins"} className={"jenkins-link plugin-link"} style={{"marginLeft": "auto"}}>
            You can get more themes at
            <ExtensionPuzzleOutline />
            Plugins
          </Link>
        </p>
        <div className={"themes"}>
          {items.map(theme => {
            return (
              <div className={"theme"}>
                <div></div>
                <p>{theme.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
