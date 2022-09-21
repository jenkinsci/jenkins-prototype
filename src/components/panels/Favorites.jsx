import {BookOutline, SearchOutline} from "react-ionicons";
import {Link} from "react-router-dom";

function Favorites() {
  return (
    <div className={"app-favorites"}>
      <Link to={"/project"} className={"app-favorites__item"}>
        <div className={"app-favorites__item__icon"}>
          <BookOutline/>
        </div>
        Scalemate/develop
      </Link>
      <Link to={"/project"} className={"app-favorites__item"}>
        <div className={"app-favorites__item__icon"}>
          <BookOutline/>
        </div>
        Paleta/develop
      </Link>
      <Link to={"/project"} className={"app-favorites__item"}>
        <div className={"app-favorites__item__icon"}>
          <SearchOutline/>
        </div>
        Pale
      </Link>
      <Link to={"/project"} className={"app-favorites__item"}>
        <div className={"app-favorites__item__icon"}>
          <BookOutline/>
        </div>
        Integration tests
      </Link>
    </div>
  )
}

export default Favorites
