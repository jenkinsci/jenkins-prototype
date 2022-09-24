import {Link} from "react-router-dom";
import {LogoGithub, SearchOutline, ShieldOutline} from "react-ionicons";
import builds from "../../data/builds";
import Overflow from "../../components/Overflow";

export default function BuildHistoryPage() {
  return (
    <div className={"jenkins-body"}>
      <Link className={"app-back-link"} to={"/project"}>Back to master</Link>
      <div className="jenkins-app-bar jenkins-app-bar--sticky">
        <div className={"jenkins-app-bar__content"}>
          <h1 className={"jenkins-project-heading"}>
            Build history
          </h1>
        </div>
        <div className={"jenkins-app-bar__controls"}>
          <div className={"app-search-bar"}>
            <SearchOutline />
            <input type="search" placeholder={"Search"} />
          </div>
        </div>
      </div>
      <div className={"jenkins-build-history"}>
        {builds.map(build => {
          return (
            <div className={"jenkins-build-history__item"}>
              <Link to={"/project/build"} className={"jenkins-build-history__item__link"}>
                <div className={"jenkins-build-history__item__link__icon"}>
                  {build.state}
                  <div className={"jenkins-build-history__item__link__icon__owner"}>
                    <LogoGithub />
                  </div>
                </div>
                <div className={"jenkins-build-history__item__link__details"}>
                  <p className="jenkins-build-history__item__link__details__build-number">{build.name}</p>
                  <p className="jenkins-build-history__item__link__details__message">{build.message}</p>
                </div>
              </Link>
              <Overflow clazz={"jenkins-button--transparent"}>
                <a>
                  <LogoGithub />
                  Open on GitHub
                </a>
                <hr/>
                <a>
                  <ShieldOutline />
                  Embeddable Build Status
                </a>
              </Overflow>
            </div>
          )
        })}
      </div>
    </div>
  );
}
