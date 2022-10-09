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
          <h1>
            Builds
            <span style={{"marginLeft": "1rem", "color": "var(--color-secondary)"}}>
              { builds.length }
            </span>
          </h1>
        </div>
        <div className={"jenkins-app-bar__controls"}>
          <div className={"app-search-bar"}>
            <SearchOutline />
            <input type="search" placeholder={"Search"} />
          </div>
        </div>
      </div>

      <table className={"jenkins-table"}>
        <thead>
          <tr>
            <th className="jenkins-table-icon-host">
              S
            </th>
            <th>
              <div className={"jenkins-table-centerer"}>
                Run
              </div>
            </th>
            <th>
              <div className={"jenkins-table-centerer"}>
                Commit
              </div>
            </th>
            <th>
              Message
            </th>
            <th>
              Duration
            </th>
            <th>
              Completed
            </th>
            <th className="jenkins-table-icon-host"></th>
          </tr>
        </thead>
        <tbody>
          {builds.map(build => {
            return (
              <tr>
                <td className="jenkins-table-icon-host">
                  <div className={"jenkins-table-centerer"} style={{marginLeft: "1rem"}}>
                    <div className={"jenkins-build-history__item__link__icon"}>
                      {build.state}
                      <div className={"jenkins-build-history__item__link__icon__owner"}>
                        {build.icon ? build.icon : (
                          <LogoGithub color={"var(--foreground-color)"} cssClasses={"ionicon"} />
                        )}
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  <div className={"jenkins-table-centerer"}>
                    <Link className={"jenkins-link"} to={"/project/build/" + build.name}>
                      #{build.name}
                    </Link>
                  </div>
                </td>

                <td>
                  <div className={"jenkins-table-centerer"}>
                    <Link className={"jenkins-link"}  to={"/project/build" + build.name}>
                      {build.commit}
                    </Link>
                  </div>
                </td>

                <td>
                  {build.message}
                </td>

                <td>
                  10 minutes
                </td>

                <td>
                  Five hours ago
                </td>

                <td className="jenkins-table-icon-host">
                  <div className={"jenkins-table-centerer"} style={{marginLeft: "1rem"}}>
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
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
