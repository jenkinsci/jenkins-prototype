import {Link} from "react-router-dom";
import {ExtensionPuzzleOutline} from "react-ionicons";

export default function ProjectTypes() {
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
      <h1 style={{"margin": "30px 0 30px 0"}}>Project types</h1>

      <p>This will be implemented</p>
    </>
  );
}
