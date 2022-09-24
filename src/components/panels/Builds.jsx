import {Link} from "react-router-dom";
import runningBuilds from "../../data/running-builds";
import PassingIcon from "../icons/PassingIcon";

export default function Builds() {
  return runningBuilds.map(category => {
    return (
      <>
        <p className={"app-command-palette__heading"}>{category.name}</p>
        {category.items.map(item => {
          return (
            <Link to={item.link} className={"app-command-palette__result"}>
              <PassingIcon />
              {item.name}
            </Link>
          )
        })}
      </>
    )
  })
}
