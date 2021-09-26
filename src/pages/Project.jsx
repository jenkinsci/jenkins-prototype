import {ReactComponent as Sun} from "../sun.svg";
import {ReactComponent as Cloud} from "../cloud.svg";
import Green from "../green.svg";
import {Link} from "react-router-dom";
import {EllipsisHorizontalOutline, SearchOutline} from "react-ionicons";

function Dashboard() {

  const items = [
    {
      state: "",
      weather: <Sun/>,
      name: "Scalemate",
      lastSuccess: "16 hours ago",
      lastFailure: "One day ago",
      lastDuration: "30 seconds"
    },
    {
      state: "",
      weather: <Cloud/>,
      name: "Paleta",
      lastSuccess: "10 hours ago",
      lastFailure: "Two days ago",
      lastDuration: "1 minute and 15 seconds"
    }
  ]

  return (
    <div className="jenkins-body">
      <div className={"jenkins-breadcrumbs"}>
        <Link to={"/"} className={"jenkins-breadcrumb"}>Dashboard</Link>
      </div>
      <div className="jenkins-app-bar">
        <div className={"jenkins-app-bar__content"}>
          <h1>Scalemate</h1>
        </div>
        <div className={"jenkins-app-bar__controls"}>
          <a className={"jenkins-button jenkins-button--primary"}>Build with parameters</a>
          <a className={"jenkins-button"}>Configure</a>
          <a className={"jenkins-button jenkins-button--overflow"}>
            <EllipsisHorizontalOutline/>
          </a>
        </div>
      </div>
      <div className={"jenkins-cards"}>
        <div className={"jenkins-cards__item"}>
          <p className="jenkins-cards__item__title">Build history</p>
          <div className={"jenkins-search"}>
            <input placeholder={"Search builds..."}/>
            <SearchOutline/>
          </div>
          <div className={"jenkins-build-history"}>
            {Array.from(Array(10), (e, i) => {
              return (
                <div className={"jenkins-build-history__item"}>
                  <img src={Green}/>
                  <Link to={"/build"} className={"jenkins-link"}>Build {374 - i}</Link>
                </div>
              )
            })}
          </div>
        </div>
        <div className={"jenkins-cards__item jenkins-cards__item--wide"}>
          <p className="jenkins-cards__item__title">Stage pipeline</p>

        </div>
        <div className={"jenkins-cards__item"}><p className="jenkins-cards__item__title">Build parameters</p></div>
        <div className={"jenkins-cards__item"}><p className="jenkins-cards__item__title">Stuff</p></div>
        <div className={"jenkins-cards__item"}><p className="jenkins-cards__item__title">Stuff</p></div>
        <div className={"jenkins-cards__item"}><p className="jenkins-cards__item__title">Stuff</p></div>
        <div className={"jenkins-cards__item"}><p className="jenkins-cards__item__title">Stuff</p></div>
        <div className={"jenkins-cards__item"}><p className="jenkins-cards__item__title">Stuff</p></div>
      </div>
    </div>
  );
}

export default Dashboard;
